/* Sem bibliotecas ou servidor: funciona também abrindo index.html diretamente. */
'use strict';
(() => {
  const app = document.getElementById('app');
  const announcement = document.getElementById('announcement');
  const levels = window.FONOGAME_LEVELS;
  const lifeLimits = { easy: 3, medium: 2, hard: 1 };
  const themes = {
    language: ['🔤', 'Sons, Sílabas e Palavras'],
    space: ['📍', 'Noções de Espaço'],
    math: ['🔢', 'Matemática, Quantidades e Comparações'],
    visual: ['🎨', 'Percepção Visual, Cores, Animais e Escuta']
  };
  let level = null, index = 0, stars = 0, lives = 0, maxLives = 0, busy = false, options = [];
  let advanceTimer, narrationTimer, speakingId = 0, audioContext;
  let narrationText = '', soundEnabled = true;
  try { soundEnabled = window.localStorage.getItem('fonogame-som') !== 'desligado'; } catch { /* A preferência é opcional. */ }

  function escapeHTML(text) {
    return String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }
  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function mascot(happy = false) {
    return `<img class="mascot" src="assets/capivara${happy ? '-happy' : ''}.svg" alt="Capivara ${happy ? 'feliz' : 'amiga'}" width="110" height="130">`;
  }
  function heart(filled = true) {
    return `<svg class="heart ${filled ? 'filled' : 'empty'}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21S2 15 2 8.5A5.5 5.5 0 0 1 12 5.3 5.5 5.5 0 0 1 22 8.5C22 15 12 21 12 21Z"/></svg>`;
  }
  function lifeHearts() {
    return Array.from({ length: maxLives }, (_, i) => heart(i < lives)).join('');
  }
  function livesLabel() {
    return `${lives} de ${maxLives} ${maxLives === 1 ? 'vida' : 'vidas'}`;
  }
  function updateLives() {
    const counter = document.getElementById('lives');
    counter.innerHTML = lifeHearts();
    counter.setAttribute('aria-label', livesLabel());
    counter.title = livesLabel();
    counter.classList.toggle('low', lives === 1);
    counter.classList.remove('life-lost');
    // Reinicia a animação sem trocar a pergunta ou as alternativas.
    void counter.offsetWidth;
    counter.classList.add('life-lost');
  }
  function stopSpeech() {
    clearTimeout(narrationTimer);
    speakingId++;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    document.querySelector('.speech')?.classList.remove('speaking');
  }
  function speak(text) {
    stopSpeech();
    if (!soundEnabled || !('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') return;
    try {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang === 'pt-BR') || voices.find(v => v.lang.startsWith('pt'));
    if (voice) utterance.voice = voice;
    utterance.lang = 'pt-BR';
    utterance.rate = .88;
    utterance.pitch = 1.12;
    const id = speakingId;
    utterance.onstart = () => { if (id === speakingId) document.querySelector('.speech')?.classList.add('speaking'); };
    utterance.onend = utterance.onerror = () => { if (id === speakingId) document.querySelector('.speech')?.classList.remove('speaking'); };
    window.speechSynthesis.speak(utterance);
    } catch { /* As imagens e os textos permitem jogar mesmo sem voz disponível. */ }
  }
  function tone(correct) {
    if (!soundEnabled) return;
    try {
      const Context = window.AudioContext || window.webkitAudioContext;
      if (!Context) return;
      audioContext ||= new Context();
      if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
      const notes = correct ? [523.25, 659.25, 783.99] : [294, 247];
      notes.forEach((frequency, i) => {
        const start = audioContext.currentTime + i * .13;
        const oscillator = audioContext.createOscillator(), volume = audioContext.createGain();
        oscillator.type = 'sine'; oscillator.frequency.value = frequency;
        volume.gain.setValueAtTime(0, start);
        volume.gain.linearRampToValueAtTime(.055, start + .015);
        volume.gain.exponentialRampToValueAtTime(.001, start + .22);
        oscillator.connect(volume); volume.connect(audioContext.destination);
        oscillator.start(start); oscillator.stop(start + .24);
      });
    } catch { /* O jogo continua se o navegador não permitir áudio. */ }
  }
  function resetTimers() {
    clearTimeout(advanceTimer);
    stopSpeech();
    busy = false;
  }
  function soundButton() {
    return `<button class="sound-button" data-sound aria-pressed="${soundEnabled}" aria-label="${soundEnabled ? 'Desligar o som' : 'Ligar o som'}" title="${soundEnabled ? 'Desligar o som' : 'Ligar o som'}"><span aria-hidden="true">${soundEnabled ? '🔊' : '🔇'}</span><span class="sound-label">Som ${soundEnabled ? 'ligado' : 'desligado'}</span></button>`;
  }
  function bindSoundControls() {
    app.querySelectorAll('[data-sound]').forEach(button => button.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      try { window.localStorage.setItem('fonogame-som', soundEnabled ? 'ligado' : 'desligado'); } catch { /* Funciona sem armazenamento local. */ }
      stopSpeech();
      if (!soundEnabled && audioContext && audioContext.state === 'running') audioContext.suspend().catch(() => {});
      button.setAttribute('aria-pressed', String(soundEnabled));
      button.setAttribute('aria-label', soundEnabled ? 'Desligar o som' : 'Ligar o som');
      button.title = soundEnabled ? 'Desligar o som' : 'Ligar o som';
      button.innerHTML = `<span aria-hidden="true">${soundEnabled ? '🔊' : '🔇'}</span><span class="sound-label">Som ${soundEnabled ? 'ligado' : 'desligado'}</span>`;
      announcement.textContent = soundEnabled ? 'Som ligado.' : 'Som desligado. Você pode continuar pelas imagens e pelos textos.';
      if (soundEnabled && level && !busy) speak(narrationText);
    }));
  }
  function home() {
    const returning = level !== null;
    resetTimers();
    announcement.textContent = '';
    level = null;
    document.querySelector('.confetti')?.remove();
    app.innerHTML = `<section class="home" aria-label="Escolher nível">
      <header class="brand"><div class="brand-icon" aria-hidden="true">🎓</div>
      <h1 tabindex="-1">FonoGame</h1><p>Educação Infantil — Pré-escola II</p></header>
      ${mascot()}
      <div class="levels">${levels.map(item => `<button class="level ${item.id}" data-level="${item.id}">
      <span class="level-icon" aria-hidden="true">${item.icon}</span><span class="level-name">${item.name}</span>
      <span class="level-description">${new Set(item.questions.map(q => q.theme)).size} temas · ${item.questions.length} perguntas</span></button>`).join('')}</div>
      <div class="home-tools">${soundButton()}
      <details class="how-to"><summary>Como jogar</summary><div class="how-to-content">
      <p>Escolha um nível e toque na resposta que combina com a pergunta.</p>
      <p>Para ouvir de novo, toque no balão de fala da capivara. Você pode ligar ou desligar o som.</p>
      <p>Cada acerto vale uma estrela. Cada erro usa uma vida: 3 no Fácil, 2 no Médio e 1 no Difícil.</p>
      <p>Não há limite de tempo para responder. Se as vidas acabarem, você pode começar de novo.</p>
      <p>Se precisar, peça ajuda a um adulto. Vamos aprender juntos!</p>
      </div></details></div>
      </section>`;
    app.querySelectorAll('[data-level]').forEach(button => button.addEventListener('click', () => start(button.dataset.level)));
    app.querySelectorAll('[data-level]').forEach(button => {
      const limit = lifeLimits[button.dataset.level];
      button.insertAdjacentHTML('beforeend', `<span class="level-lives">${heart()} ${limit} ${limit === 1 ? 'vida' : 'vidas'}</span>`);
    });
    bindSoundControls();
    if (returning) app.querySelector('h1').focus({preventScroll:true});
    window.scrollTo(0, 0);
  }
  function start(id) {
    resetTimers();
    level = levels.find(item => item.id === id);
    index = 0; stars = 0;
    maxLives = lifeLimits[level.id];
    lives = maxLives;
    document.querySelector('.confetti')?.remove();
    question();
  }
  function optionHTML(option, type) {
    let content;
    if (option.art) content = `<img class="illustration" src="assets/illustrations/${option.art}" alt="${escapeHTML(option.alt || option.label)}" width="200" height="200"><span class="image-label">${escapeHTML(option.label)}</span>`;
    else if (option.image) content = `<img src="assets/images/${option.image}" alt="${escapeHTML(option.alt)}" width="400" height="400"><span class="image-label">${escapeHTML(option.label)}</span>`;
    else if (type === 'numbers') content = `<span class="number-option">${escapeHTML(option.label)}</span>`;
    else content = `<span class="word-option"><span class="option-emoji" aria-hidden="true">${option.emoji || ''}</span><span class="option-word">${escapeHTML(option.label)}</span></span>`;
    return `<button class="option" data-answer="${option.id}" aria-label="${escapeHTML(option.label)}">${content}</button>`;
  }
  function question() {
    stopSpeech(); busy = false;
    const q = level.questions[index], theme = themes[q.theme];
    options = shuffle(q.options);
    const narration = q.narration || `${q.prompt} As opções são: ${options.map(o => o.label).join(', ')}.`;
    narrationText = narration;
    app.innerHTML = `<nav class="hud" aria-label="Progresso do jogo">
      <button class="home-button" data-home><span aria-hidden="true">🏠</span> Início</button>
      <div class="progress"><div class="progress-labels"><span>${level.name}</span><span>${index}/${level.questions.length}</span></div>
      <div class="track" role="progressbar" aria-label="Perguntas concluídas" aria-valuemin="0" aria-valuemax="${level.questions.length}" aria-valuenow="${index}"><div class="track-fill" style="width:${index / level.questions.length * 100}%"></div></div></div>
      <div class="score" aria-label="${stars} ${stars === 1 ? 'estrela' : 'estrelas'}"><span aria-hidden="true">⭐</span><span id="star-count">${stars}</span></div>
      <div id="lives" class="lives ${lives === 1 ? 'low' : ''}" role="img" aria-label="${livesLabel()}" title="${livesLabel()}">${lifeHearts()}</div>${soundButton()}</nav>
      <section class="game-stage ${q.visual ? 'with-visual' : ''}" data-question="${q.id}"><div class="panel"><div class="panel-body">
      <div class="theme ${q.theme}"><span aria-hidden="true">${theme[0]}</span>${theme[1]}</div>
      <div class="question-row">${mascot()}<button class="speech" title="Ouvir a pergunta novamente" aria-label="Ouvir a pergunta: ${escapeHTML(q.prompt)}">
      <span class="cue-line"><span class="wave" aria-hidden="true">${[5,10,7,13,6,10,8].map((h,i)=>`<i style="--h:${h}px;--delay:${i*.06}s"></i>`).join('')}</span><span>${escapeHTML(q.cue)}</span></span>
      <span class="question-text">${escapeHTML(q.prompt)}</span></button></div>
      ${q.visual ? `<figure class="question-visual"><img src="assets/illustrations/${q.visual.image}" alt="${escapeHTML(q.visual.alt)}" width="600" height="180"></figure>` : ''}
      <div class="options ${options.length === 2 ? 'two' : options.length === 3 ? 'three' : ''}" aria-label="Respostas">${options.map(item => optionHTML(item,q.type)).join('')}</div>
      <div id="feedback" hidden></div></div></div></section>`;
    app.querySelector('[data-home]').addEventListener('click', home);
    app.querySelector('.speech').addEventListener('click', () => {
      if (soundEnabled) speak(narration);
      else announcement.textContent = 'O som está desligado. Use o botão de som para ouvir a pergunta.';
    });
    bindSoundControls();
    app.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => answer(button.dataset.answer)));
    announcement.textContent = `Pergunta ${index + 1} de ${level.questions.length}. ${lives} ${lives === 1 ? 'vida restante' : 'vidas restantes'}. ${q.prompt}`;
    narrationTimer = setTimeout(() => speak(narration), 400);
    app.querySelector('.speech').focus({preventScroll:true});
    window.scrollTo(0, 0);
  }
  function answer(id) {
    if (busy) return;
    const q = level.questions[index], selected = options.find(item => item.id === id);
    if (!selected) return;
    busy = true; stopSpeech();
    const correct = id === q.correct;
    if (!correct) {
      lives = Math.max(0, lives - 1);
      updateLives();
    }
    const button = [...app.querySelectorAll('[data-answer]')].find(item => item.dataset.answer === id);
    app.querySelectorAll('[data-answer]').forEach(item => item.disabled = true);
    button.classList.add(correct ? 'correct' : 'wrong');
    button.insertAdjacentHTML('beforeend', `<span class="answer-mark" aria-hidden="true">${correct ? '✓' : '✗'}</span>`);
    const feedback = document.getElementById('feedback');
    feedback.hidden = false;
    feedback.className = `feedback ${correct ? 'correct-feedback' : 'wrong-feedback'}`;
    feedback.innerHTML = correct ? `🎉 Muito bem! A resposta é <strong>${escapeHTML(selected.label)}</strong>.<span class="feedback-stars" aria-hidden="true">⭐ ⭐ ⭐</span>` : lives > 0
      ? `Tudo bem! Tente outra opção. ${lives === 1 ? 'Você ainda tem 1 vida' : `Você ainda tem ${lives} vidas`}.`
      : 'Vamos começar de novo? Você pode tentar quantas vezes quiser!';
    announcement.textContent = feedback.textContent;
    tone(correct);
    if (correct) {
      stars++;
      document.getElementById('star-count').textContent = stars;
      app.querySelector('.score').setAttribute('aria-label', `${stars} ${stars === 1 ? 'estrela' : 'estrelas'}`);
      app.querySelector('.mascot').src = 'assets/capivara-happy.svg';
      advanceTimer = setTimeout(() => {
        index++;
        if (index < level.questions.length) question(); else result();
      }, 2000);
    } else {
      advanceTimer = setTimeout(() => {
        if (lives === 0) {
          result(false);
          return;
        }
        busy = false;
        button.classList.remove('wrong'); button.querySelector('.answer-mark')?.remove();
        feedback.hidden = true;
        app.querySelectorAll('[data-answer]').forEach(item => item.disabled = false);
        button.focus({preventScroll:true});
        announcement.textContent = `Tente de novo. ${lives} ${lives === 1 ? 'vida restante' : 'vidas restantes'}. Escolha outra resposta.`;
      }, 1600);
    }
  }
  function result(won = true) {
    resetTimers();
    const percent = Math.round(stars / level.questions.length * 100);
    const heading = won ? 'Incrível! Você arrasou! 🚀' : 'Vamos tentar de novo?';
    app.innerHTML = `<section class="result-stage"><div class="panel result ${won ? '' : 'lost'}"><div class="panel-body">
      ${mascot(won)}${won ? '<div class="stars" aria-label="Três estrelas"><span>⭐</span><span>⭐</span><span>⭐</span></div>' : `<div class="lost-hearts" role="img" aria-label="Sem vidas">${lifeHearts()}</div><span class="end-label">${level.name} · As vidas acabaram</span>`}
      <h2 tabindex="-1">${heading}</h2>
      <p>Você completou <strong>${stars}</strong> de <strong>${level.questions.length}</strong> perguntas</p>
      <div class="track result-track" role="progressbar" aria-label="Progresso no nível" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><div class="track-fill" style="width:${percent}%"></div></div>
      <span class="percentage">${percent}% do nível concluído</span>
      <div class="result-actions"><button class="repeat">${won ? '↺ Repetir' : '↺ Tentar novamente'}</button><button class="return">🏠 Início</button></div>
      </div></div></section>`;
    const id = level.id;
    app.querySelector('.repeat').addEventListener('click', () => start(id));
    app.querySelector('.return').addEventListener('click', home);
    app.querySelector('h2').focus({preventScroll:true});
    announcement.textContent = won
      ? `Incrível! Você completou ${stars} de ${level.questions.length} perguntas. ${percent}% do nível concluído.`
      : `As vidas acabaram. Você completou ${stars} de ${level.questions.length} perguntas. Tente novamente para começar com ${maxLives} ${maxLives === 1 ? 'vida' : 'vidas'}.`;
    if (!won) return;
    const colors = ['#facc15','#a855f7','#06b6d4','#22c55e','#ec4899'];
    const confetti = document.createElement('div');
    confetti.className = 'confetti'; confetti.setAttribute('aria-hidden','true');
    confetti.innerHTML = Array.from({length:36},(_,i)=>`<i style="--x:${Math.random()*100}%;--c:${colors[i%colors.length]};--d:${Math.random()*.8}s"></i>`).join('');
    document.body.append(confetti);
  }
  window.addEventListener('pagehide', stopSpeech);
  home();
})();
