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
    machineSub: '16 Slots im echten Automatenstil mit 4 Fächern pro Reihe.',
    priceCurrency: 'Fr.',
    machineCount: '16 SLOTS',
    orderTitle: 'Bestellung',
    orderNote: 'Menü folgt. Hier kommt später der Bestellbereich hin.',
    cartLabel: 'Warenkorb',
    cartEmpty: 'Noch leer',
    orderButton: 'Bestellung folgt',
    productPlaceholder: 'Bildplatzhalter',
    imageInfo: 'später Bild',
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
    machineSub: '16 slots en vrai style distributeur avec 4 compartiments par rangée.',
    priceCurrency: 'Fr.',
    machineCount: '16 SLOTS',
    orderTitle: 'Commande',
    orderNote: 'Menu à venir. La zone de commande sera ajoutée ici plus tard.',
    cartLabel: 'Panier',
    cartEmpty: 'Encore vide',
    orderButton: 'Commande à venir',
    productPlaceholder: 'Image',
    imageInfo: 'image plus tard',
  }
}

const baseProducts = [
  { title: 'Snack Box', price: '8.–' },
  { title: 'Power Pack', price: '8.–' },
  { title: 'Sweet Pack', price: '10.–' },
  { title: 'Classic Box', price: '12.–' },
  { title: 'Snack Box', price: '8.–' },
  { title: 'Power Pack', price: '8.–' },
  { title: 'Energy Pack', price: '10.–' },
  { title: 'Classic Box', price: '12.–' },
  { title: 'Snack Box', price: '8.–' },
  { title: 'Power Pack', price: '8.–' },
  { title: 'Sweet Pack', price: '10.–' },
  { title: 'Classic Box', price: '12.–' },
  { title: 'Snack Box', price: '8.–' },
  { title: 'Power Pack', price: '8.–' },
  { title: 'Energy Pack', price: '10.–' },
  { title: 'Classic Box', price: '12.–' },
]

const products = baseProducts.map((p, i) => ({ ...p, slot: i + 1 }))

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
    <article class="vm-slot reveal-item reveal-item-card" style="--card-delay:${index};">
      <div class="vm-slot-no">${String(p.slot).padStart(2, '0')}</div>
      <div class="vm-slot-window">
        <div class="vm-slot-placeholder">
          <div class="vm-plus">+</div>
          <div class="vm-placeholder-text">${t.imageInfo}</div>
        </div>
        <div class="vm-spiral-row">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="vm-slot-price">${t.priceCurrency} ${p.price}</div>
      <div class="vm-slot-name">${p.title}</div>
      <div class="vm-slot-outlet"><div class="vm-slot-light"></div></div>
    </article>
  `).join('')

  app.innerHTML = machineShell(`
    <section class="machine-stage reveal-item reveal-item-2">
      <div class="machine-heading">
        <div class="machine-heading-copy">
          <h1>${t.machineTitle}</h1>
          <p>${t.machineSub}</p>
        </div>
      </div>
      <div class="vending-layout reveal-item reveal-item-3">
        <section class="vending-machine-shell">
          <div class="machine-titlebar">ARMEEBOX Automat</div>
          <div class="machine-main-grid">
            <div class="machine-glass-panel">
              <div class="machine-product-grid">${slots}</div>
            </div>
            <aside class="machine-control-panel">
              <div class="machine-total-display">
                <div class="currency-row"><span>${t.priceCurrency}</span><strong>0.–</strong></div>
                <div class="total-row"><span>Total:</span><strong>0</strong></div>
              </div>
              <button class="machine-order-button" type="button" disabled>${t.orderButton.toUpperCase()}</button>
              <div class="machine-panel-status">
                <div class="status-dot"></div>
                <div class="status-dot active"></div>
              </div>
              <div class="machine-card-area"></div>
              <div class="machine-tray"></div>
              <div class="machine-side-note">
                <div class="side-note-title">${t.orderTitle}</div>
                <p>${t.orderNote}</p>
                <div class="side-cart-box">
                  <span>${t.cartLabel}</span>
                  <strong>${t.cartEmpty}</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
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
  return renderShop()
}

window.addEventListener('hashchange', render)
render()
