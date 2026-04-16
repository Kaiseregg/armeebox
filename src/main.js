import './style.css'

const texts = {
  de: {
    choose: 'Sprache wählen',
    chooseSub: 'Bitte zuerst deine Sprache auswählen.',
    deutsch: 'Deutsch',
    francais: 'Français',
    line1: 'Achtung, fertig, Fresspäckli',
    line2: 'Wir liefern dein Nachschub in die Kaserne und danach zu dir nach Hause',
    skipIntro: 'Intro überspringen',
    toMachine: 'Zum Automaten',
    shopKicker: 'Virtueller Automat',
    shopTitle: 'Fresspäckli bestellen',
    shopCopy: '15 Slots als klare Standardansicht. Spätere Skalierung auf 20 oder 25 Slots ist vorbereitet.',
    standard15: '15 Slots Standard',
    info: 'INFO',
    infoTitle: 'Einfach, modern, übersichtlich',
    infoCopy: 'Die Zahlungsarten kommen erst im Warenkorb / Checkout. Dieser erste Schritt zeigt den sauberen Eintritt, das Intro, den Shop-Aufbau und die mobile Ordnung der Slots.',
    stepNote: 'STEP 1: Fokus auf Struktur, Sprache, Intro, Shop und Navigation.',
    grundidee: 'Grundidee',
    agb: 'AGB',
    kontakt: 'Kontakt',
    back: '← Zurück zum Automaten',
    pageGrundideeTitle: 'Grundidee ARMEEBOX',
    pageGrundideeText: 'Die Grundidee folgt später. Hier kommt die offizielle Beschreibung von ARMEEBOX rein.',
    pageAgbTitle: 'AGB',
    pageAgbText: 'Die AGB folgen später. Dieser Bereich ist vorbereitet und führt immer sauber zurück zum Automaten.',
    pageKontaktTitle: 'Kontakt',
    pageKontaktText: 'Kontaktformular folgt im nächsten Schritt. Dieser Bereich bleibt mit Rückweg zum Automaten erreichbar.'
  },
  fr: {
    choose: 'Choisir la langue',
    chooseSub: 'Veuillez d’abord choisir votre langue.',
    deutsch: 'Deutsch',
    francais: 'Français',
    line1: 'A vos marque, prêts, paquet du soldat',
    line2: 'Nous livrons le ravitaillement à ta caserne et ensuite à ton domicile',
    skipIntro: 'Passer l’intro',
    toMachine: 'Vers l’automate',
    shopKicker: 'Automate virtuel',
    shopTitle: 'Commander un paquet du soldat',
    shopCopy: '15 slots en vue standard claire. Une extension à 20 ou 25 slots est déjà prévue.',
    standard15: '15 slots standard',
    info: 'INFO',
    infoTitle: 'Simple, moderne, clair',
    infoCopy: 'Les moyens de paiement viennent seulement dans le panier / checkout. Cette première étape montre une entrée propre, l’intro, la structure du shop et l’ordre mobile des slots.',
    stepNote: 'STEP 1 : focus sur la structure, la langue, l’intro, le shop et la navigation.',
    grundidee: 'Idée',
    agb: 'CGV',
    kontakt: 'Contact',
    back: '← Retour à l’automate',
    pageGrundideeTitle: 'Idée ARMEEBOX',
    pageGrundideeText: 'La présentation suivra plus tard. Ici viendra la description officielle de ARMEEBOX.',
    pageAgbTitle: 'CGV',
    pageAgbText: 'Les CGV suivront plus tard. Cette zone est préparée et ramène toujours proprement à l’automate.',
    pageKontaktTitle: 'Contact',
    pageKontaktText: 'Le formulaire de contact arrive à l’étape suivante. Cette zone garde un retour vers l’automate.'
  }
}

const products = Array.from({ length: 15 }, (_, i) => {
  const titles = ['Snack Box', 'Power Pack', 'Süsses Paket']
  const descs = [
    'Salzige Snacks und kleine Überraschungen.',
    'Mix aus Energie, Getränken und Extras.',
    'Süsse Auswahl für kleine Aufmerksamkeiten.'
  ]
  return {
    slot: i + 1,
    title: titles[i % 3],
    desc: descs[i % 3],
    price: `CHF ${(9.9 + i).toFixed(2)}`
  }
})

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

function playIntroTone() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(80, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.6)
    gain.gain.setValueAtTime(0.0001, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.05)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2)
    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 1.25)
  } catch {}
}

function shell(content, current = '') {
  const t = getText()
  return `
    <div class="app-shell">
      <header class="header">
        <a href="#shop" class="brand"><img src="/logo.png" alt="ARMEEBOX" /></a>
        <nav class="nav">
          <button class="nav-btn ${current === 'grundidee' ? 'active' : ''}" data-route="grundidee">${t.grundidee}</button>
          <button class="nav-btn ${current === 'agb' ? 'active' : ''}" data-route="agb">${t.agb}</button>
          <button class="nav-btn ${current === 'kontakt' ? 'active' : ''}" data-route="kontakt">${t.kontakt}</button>
        </nav>
      </header>
      <main class="wrap">${content}</main>
      <div class="footer-gap"></div>
    </div>`
}

function renderLanguage() {
  const t = texts.de
  app.innerHTML = `
    <div class="center-panel panel">
      <img class="logo-lg" src="/logo.png" alt="ARMEEBOX" />
      <h1>${t.choose}</h1>
      <p class="small-note">${t.chooseSub}</p>
      <div class="lang-buttons">
        <button class="lang-btn" data-lang="de">Deutsch</button>
        <button class="lang-btn" data-lang="fr">Français</button>
      </div>
    </div>`
  app.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', e => {
    const lang = e.currentTarget.dataset.lang
    setLang(lang)
    playIntroTone()
    location.hash = '#intro'
    render()
  }))
}

function renderIntro() {
  const t = getText()
  app.innerHTML = shell(`
    <section class="panel intro-stage intro-pulse">
      <div class="intro-content">
        <img class="logo-lg" src="/logo.png" alt="ARMEEBOX" />
        <div class="intro-kicker">Virtueller Automat für Fresspäckli</div>
        <div class="intro-line1">${t.line1}</div>
        <div class="intro-line2">${t.line2}</div>
        <div class="intro-actions">
          <button class="primary-btn" data-route="shop">${t.toMachine}</button>
          <button class="secondary-btn" data-route="shop">${t.skipIntro}</button>
        </div>
      </div>
    </section>
  `)
  setTimeout(() => {
    if (location.hash === '#intro') {
      location.hash = '#shop'
      render()
    }
  }, 4200)
  bindRoutes()
}

function renderShop() {
  const t = getText()
  const cards = products.map(p => `
    <article class="slot">
      <div class="slot-num">${p.slot}</div>
      <div class="slot-title">${p.title}</div>
      <div class="slot-desc">${p.desc}</div>
      <div class="slot-price">${p.price}</div>
    </article>
  `).join('')

  app.innerHTML = shell(`
    <section class="panel shop-hero">
      <div>
        <div class="kicker">${t.shopKicker}</div>
        <h1 class="hero-title">${t.shopTitle}</h1>
        <p class="hero-copy">${t.shopCopy}</p>
      </div>
      <div class="hero-pill">${t.standard15}</div>
    </section>
    <section class="shop-layout">
      <section class="panel machine">
        <h2>ARMEEBOX Automat</h2>
        <p class="machine-sub">Saubere Standardansicht ohne doppelte Elemente.</p>
        <div class="grid">${cards}</div>
      </section>
      <aside class="panel sidebar">
        <section class="info-card">
          <div class="kicker">${t.info}</div>
          <h3>${t.infoTitle}</h3>
          <p>${t.infoCopy}</p>
        </section>
        <button class="primary-btn">${t.toMachine}</button>
        <p class="step-note">${t.stepNote}</p>
      </aside>
    </section>
  `)
  bindRoutes()
}

function renderContent(type) {
  const t = getText()
  const title = type === 'grundidee' ? t.pageGrundideeTitle : type === 'agb' ? t.pageAgbTitle : t.pageKontaktTitle
  const text = type === 'grundidee' ? t.pageGrundideeText : type === 'agb' ? t.pageAgbText : t.pageKontaktText
  app.innerHTML = shell(`
    <section class="panel content-page">
      <button class="back-link" data-route="shop">${t.back}</button>
      <div class="kicker">ARMEEBOX</div>
      <h1 class="page-title">${title}</h1>
      <p class="page-text">${text}</p>
    </section>
  `, type)
  bindRoutes()
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
  if (hash === '#grundidee') return renderContent('grundidee')
  if (hash === '#agb') return renderContent('agb')
  if (hash === '#kontakt') return renderContent('kontakt')
  location.hash = getLang() ? '#intro' : '#lang'
  render()
}

window.addEventListener('hashchange', render)
render()
