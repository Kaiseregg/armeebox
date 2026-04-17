import './style.css'

const texts = {
  de: {
    choose: 'Sprache wählen',
    deutsch: 'Deutsch',
    francais: 'Français',
    introTop: 'VIRTUELLER AUTOMAT FÜR FRESSPÄCKLI',
    line1: 'Achtung, fertig, Fresspäckli',
    line2: 'Wir liefern dein Nachschub in die Kaserne und danach zu dir nach Hause',
    toMachine: 'Zum Automaten',
    machineTitle: 'ARMEEBOX Automat',
    machineSub: 'Klare Slot-Ansicht im Automatenstil.',
    slotLabel: 'SLOT',
    status: 'Verfügbar'
  },
  fr: {
    choose: 'Choisir la langue',
    deutsch: 'Deutsch',
    francais: 'Français',
    introTop: 'AUTOMATE VIRTUEL POUR PAQUETS DU SOLDAT',
    line1: 'À vos marques, prêts, paquet du soldat',
    line2: 'Nous livrons ton ravitaillement à la caserne puis à ton domicile',
    toMachine: 'Vers l’automate',
    machineTitle: 'Automate ARMEEBOX',
    machineSub: 'Vue des slots claire en style distributeur.',
    slotLabel: 'SLOT',
    status: 'Disponible'
  }
}

const products = [
  'Snack Box', 'Power Pack', 'Sweet Pack', 'Energy Pack', 'Classic Box',
  'Snack Box', 'Power Pack', 'Sweet Pack', 'Energy Pack', 'Classic Box',
  'Snack Box', 'Power Pack', 'Sweet Pack', 'Energy Pack', 'Classic Box'
].map((title, i) => ({ slot: i + 1, title }))

const app = document.querySelector('#app')
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function getLang() {
  return localStorage.getItem('armeebox_lang') || null
}

function setLang(lang) {
  localStorage.setItem('armeebox_lang', lang)
}

function getText() {
  return texts[getLang() || 'de']
}

function machineShell(content) {
  return `
    <div class="app-shell screen-enter screen-enter-fast">
      <header class="machine-header reveal-item reveal-item-1">
        <img class="header-logo" src="/logo.png" alt="ARMEEBOX" />
      </header>
      <main class="wrap">${content}</main>
    </div>`
}

function activateEntrance(scope = app) {
  requestAnimationFrame(() => {
    scope.querySelectorAll('.screen-enter').forEach(el => el.classList.add('is-visible'))
  })
}

function navigateWithTransition(hash, onBeforeChange) {
  if (prefersReducedMotion) {
    if (onBeforeChange) onBeforeChange()
    location.hash = hash
    render()
    return
  }

  const leaving = app.querySelector('.screen-enter') || app.firstElementChild
  if (leaving) leaving.classList.add('is-leaving')

  window.setTimeout(() => {
    if (onBeforeChange) onBeforeChange()
    location.hash = hash
    render()
  }, 280)
}

function renderLanguage() {
  const t = texts.de
  app.innerHTML = `
    <section class="language-screen screen-enter">
      <div class="language-stage">
        <div class="language-brand reveal-item reveal-item-1">
          <img class="language-logo" src="/logo.png" alt="ARMEEBOX" />
        </div>
        <div class="language-panel">
          <div class="eyebrow reveal-item reveal-item-2">ARMEEBOX.CH</div>
          <h1 class="reveal-item reveal-item-3">${t.choose}</h1>
          <div class="lang-buttons reveal-item reveal-item-4">
            <button class="lang-btn" data-lang="de">${t.deutsch}</button>
            <button class="lang-btn" data-lang="fr">${t.francais}</button>
          </div>
        </div>
      </div>
    </section>`

  app.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', e => {
    const button = e.currentTarget
    button.classList.add('is-selected')
    navigateWithTransition('#intro', () => setLang(button.dataset.lang))
  }))

  activateEntrance()
}

function renderIntro() {
  const t = getText()
  app.innerHTML = `
    <section class="intro-screen screen-center screen-enter">
      <div class="intro-wrap">
        <div class="intro-topline reveal-item reveal-item-1">${t.introTop}</div>
        <img class="intro-logo reveal-item reveal-item-2 logo-pop" src="/logo.png" alt="ARMEEBOX" />
        <h1 class="intro-title reveal-item reveal-item-3">${t.line1}</h1>
        <p class="intro-subtext reveal-item reveal-item-4">${t.line2}</p>
        <button class="primary-btn reveal-item reveal-item-5" data-route="shop">${t.toMachine}</button>
      </div>
    </section>`
  bindRoutes()
  activateEntrance()
}

function renderShop() {
  const t = getText()
  const slots = products.map((p, index) => `
    <article class="slot-unit reveal-item reveal-item-card" style="--card-delay:${index};">
      <div class="slot-window">
        <div class="slot-badge">${String(p.slot).padStart(2, '0')}</div>
        <div class="slot-body">
          <div class="slot-name">${p.title}</div>
          <div class="slot-meta">${t.slotLabel} ${p.slot}</div>
        </div>
      </div>
      <div class="slot-rail"></div>
      <div class="slot-statusbar">
        <span class="slot-status">${t.status}</span>
      </div>
    </article>
  `).join('')

  app.innerHTML = machineShell(`
    <section class="machine-panel reveal-item reveal-item-2">
      <div class="machine-headline reveal-item reveal-item-2">
        <h1>${t.machineTitle}</h1>
        <p>${t.machineSub}</p>
      </div>
      <section class="machine-cabinet reveal-item reveal-item-3">
        <div class="machine-topbar">
          <div class="machine-brandmark">ARMEEBOX</div>
          <div class="machine-counter">15 SLOTS</div>
        </div>
        <section class="machine-grid">
          ${slots}
        </section>
      </section>
    </section>
  `)

  activateEntrance()
}

function bindRoutes() {
  app.querySelectorAll('[data-route]').forEach(el => el.addEventListener('click', () => {
    navigateWithTransition('#' + el.dataset.route)
  }))
}

function render() {
  const hash = location.hash || '#lang'
  if (!getLang() && hash !== '#lang') {
    location.hash = '#lang'
    renderLanguage()
    return
  }
  if (hash === '#lang') return renderLanguage()
  if (hash === '#intro') return renderIntro()
  if (hash === '#shop') return renderShop()
  location.hash = getLang() ? '#intro' : '#lang'
}

window.addEventListener('hashchange', render)
render()
