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
    machineBar: 'Achtung, fertig, Fresspäckli',
    priceCurrency: 'Fr.',
    orderTitle: 'Bestellung',
    cartLabel: 'Warenkorb',
    cartEmpty: 'Noch leer',
    totalLabel: 'Total:',
    clearCart: 'Zurücksetzen',
    orderButton: 'Bestellen',
    imageInfo: 'später Bild',
    quantity: 'x',
    removeItem: 'Entfernen',
    shippingTitle: 'Versandart',
    shipBarracks: 'Versand Kaserne',
    shipPrivate: 'Versand Privat',
    shippingFree: 'Gratis',
    shippingPrivatePrice: 'Versand CHF 9.00',
    barracksLabel: 'Kaserne auswählen',
    senderTitle: 'Absender',
    senderName: 'Name / Firma',
    senderStreet: 'Strasse / Nr.',
    senderCity: 'PLZ / Ort',
    messageLabel: 'Nachricht an den Soldaten',
    privateTitle: 'Privatadresse',
    firstName: 'Vorname',
    lastName: 'Nachname',
    street: 'Strasse / Nr.',
    zip: 'PLZ',
    city: 'Ort',
    email: 'E-Mail',
    phone: 'Telefon',
    subtotal: 'Zwischentotal',
    shippingCost: 'Versand',
    finalTotal: 'Gesamt',
    reviewButton: 'Bestellung prüfen',
    reviewTitle: 'Bestellübersicht',
    reviewHint: 'Diese Angaben sollen später im Admin-Dashboard und auf dem Lieferschein erscheinen.',
    deliveryNote: 'Lieferschein-Hinweis',
    notePlaceholder: 'Hier kannst du dem Soldaten eine persönliche Nachricht schreiben.',
    chooseShipping: 'Bitte Versandart wählen.',
    formHint: 'Bei Kaserne ist der Versand gratis. Bei Privat werden CHF 9.00 Versand addiert.'
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
    machineBar: 'À vos marques, prêts, paquet du soldat',
    priceCurrency: 'Fr.',
    orderTitle: 'Commande',
    cartLabel: 'Panier',
    cartEmpty: 'Encore vide',
    totalLabel: 'Total :',
    clearCart: 'Réinitialiser',
    orderButton: 'Commander',
    imageInfo: 'image plus tard',
    quantity: 'x',
    removeItem: 'Retirer',
    shippingTitle: 'Mode d’envoi',
    shipBarracks: 'Envoi caserne',
    shipPrivate: 'Envoi privé',
    shippingFree: 'Gratuit',
    shippingPrivatePrice: 'Envoi CHF 9.00',
    barracksLabel: 'Choisir la caserne',
    senderTitle: 'Expéditeur',
    senderName: 'Nom / Société',
    senderStreet: 'Rue / N°',
    senderCity: 'NPA / Ville',
    messageLabel: 'Message pour le soldat',
    privateTitle: 'Adresse privée',
    firstName: 'Prénom',
    lastName: 'Nom',
    street: 'Rue / N°',
    zip: 'NPA',
    city: 'Ville',
    email: 'E-mail',
    phone: 'Téléphone',
    subtotal: 'Sous-total',
    shippingCost: 'Envoi',
    finalTotal: 'Total',
    reviewButton: 'Vérifier la commande',
    reviewTitle: 'Récapitulatif de commande',
    reviewHint: 'Ces informations doivent plus tard apparaître dans le tableau de bord admin et sur le bon de livraison.',
    deliveryNote: 'Note pour le bon de livraison',
    notePlaceholder: 'Ici tu peux écrire un message personnel pour le soldat.',
    chooseShipping: 'Veuillez choisir un mode d’envoi.',
    formHint: 'Pour la caserne, l’envoi est gratuit. Pour le privé, CHF 9.00 sont ajoutés.'
  }
}

const barracksAddresses = [
  {
    "id": 1,
    "label": "FU OS 30",
    "full": "FU OS 30\nName/Vorname\nKp:           Zug:\nLehrgebäude 1\nKaserne\n8180 Bülach"
  },
  {
    "id": 2,
    "label": "San S 42",
    "full": "San S 42\nName/Vorname\nKp:           Zug:\nVia della Stazione 51 (Albinengo)\n6780 Airolo"
  },
  {
    "id": 3,
    "label": "Höh Uof LG 49",
    "full": "Höh Uof LG 49\nName/Vorname\nKp:           Zug:\nMK der Berner Truppen\n3000 Bern 22"
  },
  {
    "id": 4,
    "label": "Militärmusik",
    "full": "Militärmusik\nName/Vorname\nKp:           Zug:\nKaserne\n3000 Bern 22"
  },
  {
    "id": 5,
    "label": "Log OS 40",
    "full": "Log OS 40\nName/Vorname\nKp:           Zug:\nKaserne\n3000 Bern 22"
  },
  {
    "id": 6,
    "label": "Inf DD S 14",
    "full": "Inf DD S 14\nName/Vorname\nKp:           Zug:\nKaserne Reppischtal\n8903 Birmensdorf ZH"
  },
  {
    "id": 7,
    "label": "Art/Aufkl S 31",
    "full": "Art/Aufkl S 31\nName/Vorname\nKp:           Zug:\nKaserne\n1145 Bière"
  },
  {
    "id": 8,
    "label": "Ei + Ausb  G/Rttg 74",
    "full": "Ei + Ausb  G/Rttg 74\nName/Vorname\nKp:           Zug:\nKaserne/Siechenhaus\n5620 Bremgarten"
  },
  {
    "id": 9,
    "label": "Genieschule 73",
    "full": "Genieschule 73\nName/Vorname\nKp:           Zug:\nKaserne\n5200 Brugg"
  },
  {
    "id": 10,
    "label": "FU OS 30",
    "full": "FU OS 30\nName/Vorname\nKp:           Zug:\nLehrgebäude 1\nKaserne\n8180 Bülach"
  },
  {
    "id": 11,
    "label": "FU S 63",
    "full": "FU S 63\nName/Vorname\nKp:           Zug:\nLehrgebäude 2\nKaserne\n8180 Bülach"
  },
  {
    "id": 12,
    "label": "Infanterieschule 12",
    "full": "Infanterieschule 12\nName/Vorname\nKp:           Zug:\nKaserne\n7000 Chur"
  },
  {
    "id": 13,
    "label": "Inf S 2",
    "full": "Inf S 2\nName/Vorname\nKp:           Zug:\nChemin de Planeyse 12\n2013 Colombier"
  },
  {
    "id": 14,
    "label": "Ns S 45",
    "full": "Ns S 45\nName/Vorname\nKp:           Zug:\nKaserne\n1680 Romont"
  },
  {
    "id": 15,
    "label": "BODLUV S 33",
    "full": "BODLUV S 33\nName/Vorname\nKp:           Zug:\nKaserne\n6032 Emmen"
  },
  {
    "id": 16,
    "label": "LW OS",
    "full": "LW OS\nName/Vorname\nKp:           Zug:\nKaserne\n6032 Emmen"
  },
  {
    "id": 17,
    "label": "Pil S LW 85",
    "full": "Pil S LW 85\nName/Vorname\nKp:           Zug:\nMilitärflugplatz Halle 1\n6032 Emmen"
  },
  {
    "id": 18,
    "label": "Ik Schule 61",
    "full": "Ik Schule 61\nName/Vorname\nKp:           Zug:\nWydenstrasse 18\n8500 Frauenfeld"
  },
  {
    "id": 19,
    "label": "Ausbildungszentrum der Rettungstruppen (AZR 76)",
    "full": "Ausbildungszentrum der Rettungstruppen (AZR 76)\nName/Vorname\nKp:           Zug:\nChemin de Couchefatte 42\n1237 Avully"
  },
  {
    "id": 20,
    "label": "BUSA",
    "full": "BUSA\nName/Vorname\nKp:           Zug:\nKasernenstrasse 40\n9100 Herisau"
  },
  {
    "id": 21,
    "label": "Ausbildungszentrum Spezialkräfte (AZ SK)",
    "full": "Ausbildungszentrum Spezialkräfte (AZ SK)\nName/Vorname\nKp:           Zug:\nCaserma\n6810 Isone"
  },
  {
    "id": 22,
    "label": "Elo Op Schule 64",
    "full": "Elo Op Schule 64\nName/Vorname\nKp:           Zug:\nKaserne Jassbach\n3609 Thun"
  },
  {
    "id": 23,
    "label": "Ristl Schule 62",
    "full": "Ristl Schule 62\nName/Vorname\nKp:           Zug:\nKommandohaus 2\nKaserne\n8302 Kloten"
  },
  {
    "id": 24,
    "label": "Inf OS 10",
    "full": "Inf OS 10\nName/Vorname\nKp:           Zug:\nKaserne\n4410 Liestal"
  },
  {
    "id": 25,
    "label": "Kader- und Fachschule",
    "full": "Kader- und Fachschule\nName/Vorname\nKp:           Zug:\nArmee-Ausbildungszentrum\nMurmattweg 6\n6000 Luzern 30"
  },
  {
    "id": 26,
    "label": "Zentralschule",
    "full": "Zentralschule\nName/Vorname\nKp:           Zug:\nArmee-Ausbildungszentrum\nMurmattweg 6\n6000 Luzern 30"
  },
  {
    "id": 27,
    "label": "Generalstabsschule",
    "full": "Generalstabsschule\nName/Vorname\nKp:           Zug:\nArmee-Ausbildungszentrum\nMurmattweg 6\n6000 Luzern 30"
  },
  {
    "id": 28,
    "label": "Komp Zen Sport A",
    "full": "Komp Zen Sport A\nName/Vorname\nKp:           Zug:\nHauptstrasse 247\n2532 Magglingen / Macolin"
  },
  {
    "id": 29,
    "label": "Spit S 41",
    "full": "Spit S 41\nName/Vorname\nKp:           Zug:\nWaffenplatz Moudon\n1510 Moudon"
  },
  {
    "id": 30,
    "label": "Flieger Schule 81",
    "full": "Flieger Schule 81\nName/Vorname\nKp:           Zug:\nFlieger Kaserne\n1530 Payerne"
  },
  {
    "id": 31,
    "label": "Fl Br 31",
    "full": "Fl Br 31\nName/Vorname\nKp:           Zug:\nCaserne DCA\n1530 Payerne"
  },
  {
    "id": 32,
    "label": "Komp Zen Vet D u A Tiere",
    "full": "Komp Zen Vet D u A Tiere\nName/Vorname\nKp:           Zug:\nKaserne Sand\n3000 Bern 22"
  },
  {
    "id": 33,
    "label": "Inf S 19",
    "full": "Inf S 19\nName/Vorname\nKp:           Zug:\nKaserne\n1950 Sion"
  },
  {
    "id": 34,
    "label": "ABC Abwehrschule 77",
    "full": "ABC Abwehrschule 77\nName/Vorname\nKp:           Zug:\nABC Zentrum\n3700 Spiez"
  },
  {
    "id": 35,
    "label": "Inf S 11",
    "full": "Inf S 11\nName/Vorname\nKp:           Zug:\nKaserne\n9000 St. Gallen"
  },
  {
    "id": 36,
    "label": "Ausb Zen Vpf",
    "full": "Ausb Zen Vpf\nName/Vorname\nKp:           Zug:\nKaserne\n3609 Thun"
  },
  {
    "id": 37,
    "label": "Ih Schule 43",
    "full": "Ih Schule 43\nName/Vorname\nKp:           Zug:\nKaserne AKLA, Halle 5\n3609 Thun"
  },
  {
    "id": 38,
    "label": "Pz/Art OS 22",
    "full": "Pz/Art OS 22\nName/Vorname\nKp:           Zug:\nKaserne\n3609 Thun"
  },
  {
    "id": 39,
    "label": "Pz S 21",
    "full": "Pz S 21\nName/Vorname\nKp:           Zug:\nKaserne\n3609 Thun"
  },
  {
    "id": 40,
    "label": "Rttg S 75",
    "full": "Rttg S 75\nName/Vorname\nKp:           Zug:\nKaserne\n3380 Wangen a/A"
  },
  {
    "id": 41,
    "label": "VT Schulen 47",
    "full": "VT Schulen 47\nName/Vorname\nKp:           Zug:\nAltes Zeughaus Logistik 2\n3380 Wangen an der Aare"
  },
  {
    "id": 42,
    "label": "VT Schulen 47",
    "full": "VT Schulen 47\nName/Vorname\nKp:           Zug:\nKaserne Drognens\n1680 Drognens"
  },
  {
    "id": 43,
    "label": "VT Schulen 47",
    "full": "VT Schulen 47\nName/Vorname\nKp:           Zug:\nKaserne Drognens\n1680 Drognens"
  },
  {
    "id": 44,
    "label": "Ausbildungszentrum SWISSINT / Waffenplatz Kommando Wil",
    "full": "Ausbildungszentrum SWISSINT / Waffenplatz Kommando Wil\nName/Vorname\nKp:           Zug:\nKasernenstrasse 4\n6370 Stans-Oberdorf"
  }
]

const baseProducts = [
  { title: 'Snack Box', price: 8 },
  { title: 'Power Pack', price: 8 },
  { title: 'Sweet Pack', price: 10 },
  { title: 'Classic Box', price: 12 },
  { title: 'Snack Box', price: 8 },
  { title: 'Power Pack', price: 8 },
  { title: 'Energy Pack', price: 10 },
  { title: 'Classic Box', price: 12 },
  { title: 'Snack Box', price: 8 },
  { title: 'Power Pack', price: 8 },
  { title: 'Sweet Pack', price: 10 },
  { title: 'Classic Box', price: 12 },
  { title: 'Snack Box', price: 8 },
  { title: 'Power Pack', price: 8 },
  { title: 'Energy Pack', price: 10 },
  { title: 'Classic Box', price: 12 },
]

const products = baseProducts.map((p, i) => ({ ...p, slot: i + 1, id: i + 1 }))
const app = document.querySelector('#app')
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const state = {
  lang: localStorage.getItem('armeebox_lang') || null,
  selectedSlotId: null,
  cart: [],
  orderOpen: false,
  shippingType: 'kaserne',
  barracksIndex: 0,
  privateAddress: {
    firstName: '',
    lastName: '',
    street: '',
    zip: '',
    city: '',
    email: '',
    phone: ''
  },
  sender: {
    name: '',
    street: '',
    city: ''
  },
  message: '',
  orderPreviewOpen: false
}

function setLang(lang) {
  state.lang = lang
  localStorage.setItem('armeebox_lang', lang)
}

function getText() {
  return texts[state.lang || 'de']
}

function priceLabel(value, t) {
  return `${t.priceCurrency} ${value.toFixed(0)}.–`
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
  }, 220)
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

function getCartSummary() {
  const grouped = new Map()
  for (const item of state.cart) {
    const existing = grouped.get(item.id) || { ...item, qty: 0 }
    existing.qty += 1
    grouped.set(item.id, existing)
  }
  return Array.from(grouped.values())
}

function getSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price, 0)
}

function getShippingCost() {
  if (!state.orderOpen) return 0
  return state.shippingType === 'privat' ? 9 : 0
}

function getFinalTotal() {
  return getSubtotal() + getShippingCost()
}

function removeOneFromCart(productId) {
  const index = state.cart.findIndex(item => item.id === productId)
  if (index >= 0) state.cart.splice(index, 1)
}

function getSelectedBarracks() {
  return barracksAddresses[state.barracksIndex] || barracksAddresses[0]
}

function renderCartRows(t) {
  const rows = getCartSummary()
  if (!rows.length) {
    return `<div class="cart-empty">${t.cartEmpty}</div>`
  }
  return rows.map(item => `
    <div class="cart-row" data-cart-id="${item.id}">
      <div>
        <strong>${item.title}</strong>
        <span>${t.quantity}${item.qty}</span>
      </div>
      <div class="cart-row-right">
        <b>${priceLabel(item.price * item.qty, t)}</b>
        <button class="cart-remove-btn" type="button" data-remove-id="${item.id}" aria-label="${t.removeItem}">×</button>
      </div>
    </div>
  `).join('')
}

function renderOrderForm(t) {
  if (!state.orderOpen) return ''
  const subtotal = getSubtotal()
  const shipping = getShippingCost()
  const finalTotal = getFinalTotal()
  const barracks = getSelectedBarracks()
  const shippingBarracksChecked = state.shippingType === 'kaserne' ? 'checked' : ''
  const shippingPrivateChecked = state.shippingType === 'privat' ? 'checked' : ''
  return `
    <section class="order-form-shell reveal-item reveal-item-4">
      <div class="order-form-grid">
        <div class="order-form-main">
          <h2>${t.orderTitle}</h2>
          <p class="order-form-hint">${t.formHint}</p>

          <div class="shipping-switch" role="radiogroup" aria-label="${t.shippingTitle}">
            <label class="shipping-option">
              <input type="radio" name="shippingType" value="kaserne" ${shippingBarracksChecked} />
              <span>${t.shipBarracks} <small>${t.shippingFree}</small></span>
            </label>
            <label class="shipping-option">
              <input type="radio" name="shippingType" value="privat" ${shippingPrivateChecked} />
              <span>${t.shipPrivate} <small>${t.shippingPrivatePrice}</small></span>
            </label>
          </div>

          <div class="order-fields-block">
            ${state.shippingType === 'kaserne' ? `
              <div class="field-group">
                <label>${t.barracksLabel}</label>
                <select name="barracksSelect" class="order-input">
                  ${barracksAddresses.map((entry, idx) => `<option value="${idx}" ${idx === state.barracksIndex ? 'selected' : ''}>${entry.label}</option>`).join('')}
                </select>
                <div class="address-preview">
                  ${barracks.full.split('\n').map(line => `<div>${line}</div>`).join('')}
                </div>
              </div>

              <div class="sender-box">
                <h3>${t.senderTitle}</h3>
                <div class="field-row two">
                  <div class="field-group">
                    <label>${t.senderName}</label>
                    <input class="order-input" name="senderName" value="${escapeHtml(state.sender.name)}" />
                  </div>
                  <div class="field-group">
                    <label>${t.senderStreet}</label>
                    <input class="order-input" name="senderStreet" value="${escapeHtml(state.sender.street)}" />
                  </div>
                </div>
                <div class="field-group">
                  <label>${t.senderCity}</label>
                  <input class="order-input" name="senderCity" value="${escapeHtml(state.sender.city)}" />
                </div>
              </div>

              <div class="field-group">
                <label>${t.messageLabel}</label>
                <textarea class="order-input order-textarea" name="message" placeholder="${t.notePlaceholder}">${escapeHtml(state.message)}</textarea>
              </div>
            ` : `
              <div class="sender-box">
                <h3>${t.privateTitle}</h3>
                <div class="field-row two">
                  <div class="field-group">
                    <label>${t.firstName}</label>
                    <input class="order-input" name="firstName" value="${escapeHtml(state.privateAddress.firstName)}" />
                  </div>
                  <div class="field-group">
                    <label>${t.lastName}</label>
                    <input class="order-input" name="lastName" value="${escapeHtml(state.privateAddress.lastName)}" />
                  </div>
                </div>
                <div class="field-group">
                  <label>${t.street}</label>
                  <input class="order-input" name="street" value="${escapeHtml(state.privateAddress.street)}" />
                </div>
                <div class="field-row two">
                  <div class="field-group">
                    <label>${t.zip}</label>
                    <input class="order-input" name="zip" value="${escapeHtml(state.privateAddress.zip)}" />
                  </div>
                  <div class="field-group">
                    <label>${t.city}</label>
                    <input class="order-input" name="city" value="${escapeHtml(state.privateAddress.city)}" />
                  </div>
                </div>
                <div class="field-row two">
                  <div class="field-group">
                    <label>${t.email}</label>
                    <input class="order-input" name="email" value="${escapeHtml(state.privateAddress.email)}" />
                  </div>
                  <div class="field-group">
                    <label>${t.phone}</label>
                    <input class="order-input" name="phone" value="${escapeHtml(state.privateAddress.phone)}" />
                  </div>
                </div>
              </div>
            `}
          </div>
        </div>

        <aside class="order-summary-box">
          <h3>${t.reviewTitle}</h3>
          <div class="summary-row"><span>${t.subtotal}</span><strong>${priceLabel(subtotal, t)}</strong></div>
          <div class="summary-row"><span>${t.shippingCost}</span><strong>${priceLabel(shipping, t)}</strong></div>
          <div class="summary-row total"><span>${t.finalTotal}</span><strong>${priceLabel(finalTotal, t)}</strong></div>
          <button type="button" class="review-order-btn">${t.reviewButton}</button>
          <p class="review-hint">${t.reviewHint}</p>

          ${state.orderPreviewOpen ? `
            <div class="delivery-preview">
              <div class="delivery-title">${t.deliveryNote}</div>
              ${state.shippingType === 'kaserne' ? `
                <div class="preview-block">
                  <b>${t.shipBarracks}</b>
                  ${barracks.full.split('\n').map(line => `<div>${line}</div>`).join('')}
                </div>
                <div class="preview-block">
                  <b>${t.senderTitle}</b>
                  <div>${escapeHtml(state.sender.name || '-')}</div>
                  <div>${escapeHtml(state.sender.street || '-')}</div>
                  <div>${escapeHtml(state.sender.city || '-')}</div>
                </div>
                <div class="preview-block">
                  <b>${t.messageLabel}</b>
                  <div>${escapeHtml(state.message || '-')}</div>
                </div>
              ` : `
                <div class="preview-block">
                  <b>${t.privateTitle}</b>
                  <div>${escapeHtml(state.privateAddress.firstName)} ${escapeHtml(state.privateAddress.lastName)}</div>
                  <div>${escapeHtml(state.privateAddress.street)}</div>
                  <div>${escapeHtml(state.privateAddress.zip)} ${escapeHtml(state.privateAddress.city)}</div>
                  <div>${escapeHtml(state.privateAddress.email)}</div>
                  <div>${escapeHtml(state.privateAddress.phone)}</div>
                </div>
              `}
            </div>
          ` : ''}
        </aside>
      </div>
    </section>
  `
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function updateShopUI() {
  const t = getText()
  document.querySelectorAll('[data-slot-id]').forEach(el => {
    const isSelected = Number(el.dataset.slotId) === state.selectedSlotId
    el.classList.toggle('is-selected', isSelected)
    el.querySelector('.vm-slot-light')?.classList.toggle('is-active', isSelected)
  })
  const amountEl = document.querySelector('.currency-row strong')
  const countEl = document.querySelector('.total-row strong')
  const cartEl = document.querySelector('.cart-list')
  const clearBtn = document.querySelector('.cart-clear-btn')
  const orderBtn = document.querySelector('.machine-order-button')
  if (amountEl) amountEl.textContent = `${getFinalTotal().toFixed(0)}.–`
  if (countEl) countEl.textContent = String(state.cart.length)
  if (cartEl) cartEl.innerHTML = renderCartRows(t)
  if (clearBtn) clearBtn.disabled = state.cart.length === 0
  if (orderBtn) orderBtn.disabled = state.cart.length === 0
  const formMount = document.querySelector('#order-form-mount')
  if (formMount) {
    formMount.innerHTML = renderOrderForm(t)
    bindOrderForm()
  }
  bindCartActions()
}

function renderShop() {
  const t = getText()
  const slots = products.map((p, index) => `
    <article class="vm-slot reveal-item reveal-item-card ${state.selectedSlotId === p.id ? 'is-selected' : ''}" data-slot-id="${p.id}" style="--card-delay:${index};">
      <div class="vm-slot-no">${String(p.slot).padStart(2, '0')}</div>
      <div class="vm-slot-window">
        <div class="vm-slot-placeholder">
          <div class="vm-plus">+</div>
          <div class="vm-placeholder-text">${t.imageInfo}</div>
        </div>
        <div class="vm-spiral-row"><span></span><span></span><span></span></div>
      </div>
      <div class="vm-slot-price">${priceLabel(p.price, t)}</div>
      <div class="vm-slot-name">${p.title}</div>
      <div class="vm-slot-outlet"><div class="vm-slot-light ${state.selectedSlotId === p.id ? 'is-active' : ''}"></div></div>
    </article>
  `).join('')

  app.innerHTML = machineShell(`
    <section class="machine-stage reveal-item reveal-item-2">
      <div class="machine-heading">
        <div class="machine-heading-copy">
          <h1>${t.machineTitle}</h1>
        </div>
      </div>
      <div class="vending-layout reveal-item reveal-item-3">
        <section class="vending-machine-shell">
          <div class="machine-titlebar">${t.machineBar}</div>
          <div class="machine-main-grid">
            <div class="machine-glass-panel">
              <div class="machine-product-grid">${slots}</div>
            </div>
            <aside class="machine-control-panel">
              <div class="machine-total-display">
                <div class="currency-row"><span>${t.priceCurrency}</span><strong>${getFinalTotal().toFixed(0)}.–</strong></div>
                <div class="total-row"><span>${t.totalLabel}</span><strong>${state.cart.length}</strong></div>
              </div>
              <div class="side-cart-box side-cart-box-inline">
                <span>${t.cartLabel}</span>
                <div class="cart-list">${renderCartRows(t)}</div>
              </div>
              <button class="machine-order-button" type="button" ${state.cart.length ? '' : 'disabled'}>${t.orderButton.toUpperCase()}</button>
              <div class="machine-panel-status"><div class="status-dot"></div><div class="status-dot active"></div></div>
              <div class="machine-side-note">
                <div class="side-note-title">${t.orderTitle}</div>
                <p>${t.orderHint || ''}</p>
                <div class="cart-actions">
                  <button class="cart-clear-btn" type="button" ${state.cart.length ? '' : 'disabled'}>${t.clearCart}</button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
      <div id="order-form-mount">${renderOrderForm(t)}</div>
    </section>
  `)

  app.querySelectorAll('[data-slot-id]').forEach(el => {
    el.addEventListener('click', () => {
      const product = products.find(p => p.id === Number(el.dataset.slotId))
      state.selectedSlotId = product.id
      state.cart.push({ id: product.id, title: product.title, price: product.price, slot: product.slot })
      updateShopUI()
    })
  })

  bindCartActions()
  bindOrderForm()
  activateEntrance()
}

function bindCartActions() {
  app.querySelector('.cart-clear-btn')?.addEventListener('click', () => {
    state.cart = []
    state.orderPreviewOpen = false
    updateShopUI()
  })

  app.querySelectorAll('[data-remove-id]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      removeOneFromCart(Number(btn.dataset.removeId))
      state.orderPreviewOpen = false
      updateShopUI()
    })
  })

  app.querySelector('.machine-order-button')?.addEventListener('click', () => {
    state.orderOpen = true
    updateShopUI()
    document.querySelector('#order-form-mount')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
  })
}

function bindOrderForm() {
  const formMount = document.querySelector('#order-form-mount')
  if (!formMount) return

  formMount.querySelectorAll('input[name="shippingType"]').forEach(input => {
    input.addEventListener('change', e => {
      state.shippingType = e.target.value
      state.orderPreviewOpen = false
      updateShopUI()
    })
  })

  formMount.querySelector('select[name="barracksSelect"]')?.addEventListener('change', e => {
    state.barracksIndex = Number(e.target.value)
    state.orderPreviewOpen = false
    updateShopUI()
  })

  ;['senderName','senderStreet','senderCity'].forEach(name => {
    formMount.querySelector(`[name="${name}"]`)?.addEventListener('input', e => {
      const map = { senderName: 'name', senderStreet: 'street', senderCity: 'city' }
      state.sender[map[name]] = e.target.value
    })
  })

  ;['firstName','lastName','street','zip','city','email','phone'].forEach(name => {
    formMount.querySelector(`[name="${name}"]`)?.addEventListener('input', e => {
      state.privateAddress[name] = e.target.value
    })
  })

  formMount.querySelector('[name="message"]')?.addEventListener('input', e => {
    state.message = e.target.value
  })

  formMount.querySelector('.review-order-btn')?.addEventListener('click', () => {
    state.orderPreviewOpen = true
    updateShopUI()
  })
}

function bindRoutes() {
  app.querySelectorAll('[data-route]').forEach(el => el.addEventListener('click', () => {
    navigateWithTransition('#' + el.dataset.route)
  }))
}

function render() {
  const hash = location.hash || '#lang'
  if (hash !== '#lang' && !state.lang) {
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
