import './style.css'

const texts = {
  de: {
    choose: 'Sprache wählen',
    chooseSub: 'Bitte zuerst deine Sprache auswählen.',
    deutsch: 'Deutsch',
    francais: 'Français',
    introTop: 'VIRTUELLER AUTOMAT FÜR FRESSPÄCKLI',
    line1: 'Achtung, fertig, Fresspäckli',
    line2: 'Wir liefern dein Nachschub in die Kaserne und danach zu dir nach Hause',
    toMachine: 'Zum Automaten',
    machineTitle: 'ARMEEBOX Automat',
    machineSub: 'Klare Slot-Ansicht ohne unnötige Elemente.',
    slotLabel: 'SLOT',
    status: 'Verfügbar'
  },
  fr: {
    choose: 'Choisir la langue',
    chooseSub: 'Veuillez d’abord choisir votre langue.',
    deutsch: 'Deutsch',
    francais: 'Français',
    introTop: 'AUTOMATE VIRTUEL POUR PAQUETS DU SOLDAT',
    line1: 'À vos marques, prêts, paquet du soldat',
    line2: 'Nous livrons ton ravitaillement à la caserne puis à ton domicile',
    toMachine: 'Vers l’automate',
    machineTitle: 'Automate ARMEEBOX',
    machineSub: 'Vue des slots claire, sans éléments inutiles.',
    slotLabel: 'SLOT',
    status: 'Disponible'
  }
}

const products = [
  'Snack Box', 'Power Pack', 'Sweet Pack', 'Energy Pack', 'Classic Box',
  'Snack Box', 'Power Pack', 'Sweet Pack', 'Energy Pack', 'Classic Box',
  'Snack Box', 'Power Pack', 'Sweet Pack', 'Energy Pack', 'Classic Box'
].map((title, i) => ({
  slot: i + 1,
  title
}))

const app = document.querySelector('#app')

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
    <div class="app-shell">
      <header class="machine-header">
        <img class="header-logo" src="/logo.png" alt="ARMEEBOX" />
      </header>
      <main class="wrap">${content}</main>
    </div>`
}

function renderLanguage() {
  const t = texts.de
  app.innerHTML = `
    <section class="screen-center">
      <div class="language-card">
        <img class="language-logo" src="/logo.png" alt="ARMEEBOX" />
        <h1>${t.choose}</h1>
        <p class="small-note">${t.chooseSub}</p>
        <div class="lang-buttons">
          <button class="lang-btn" data-lang="de">Deutsch</button>
          <button class="lang-btn" data-lang="fr">Français</button>
        </div>
      </div>
    </section>`

  app.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', e => {
    const lang = e.currentTarget.dataset.lang
    setLang(lang)
    location.hash = '#intro'
    render()
  }))
}

function renderIntro() {
  const t = getText()
  app.innerHTML = `
    <section class="screen-center intro-screen">
      <div class="intro-wrap">
        <div class="intro-topline">${t.introTop}</div>
        <img class="intro-logo" src="/logo.png" alt="ARMEEBOX" />
        <h1 class="intro-title">${t.line1}</h1>
        <p class="intro-subtext">${t.line2}</p>
        <button class="primary-btn" data-route="shop">${t.toMachine}</button>
      </div>
    </section>`
  bindRoutes()
}

function renderShop() {
  const t = getText()
  const slots = products.map(p => `
    <article class="slot-card">
      <div class="slot-number">${String(p.slot).padStart(2, '0')}</div>
      <div class="slot-name">${p.title}</div>
      <div class="slot-meta">${t.slotLabel} ${p.slot}</div>
      <div class="slot-status">${t.status}</div>
    </article>
  `).join('')

  app.innerHTML = machineShell(`
    <section class="machine-panel">
      <div class="machine-headline">
        <h1>${t.machineTitle}</h1>
        <p>${t.machineSub}</p>
      </div>
      <section class="machine-grid">
        ${slots}
      </section>
    </section>
  `)
}

function bindRoutes() {
  app.querySelectorAll('[data-route]').forEach(el => el.addEventListener('click', () => {
    location.hash = '#' + el.dataset.route
    render()
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
