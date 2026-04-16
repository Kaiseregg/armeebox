const state = {
  lang: localStorage.getItem('armeebox_lang') || null,
};

const screens = {
  language: document.getElementById('screen-language'),
  intro: document.getElementById('screen-intro'),
  shop: document.getElementById('screen-shop'),
  page: document.getElementById('screen-page'),
};

const copy = {
  de: {
    introEyebrow: 'Virtueller Automat für Fresspäckli',
    introTitle: 'Schnell bestellen. Persönlich überraschen.',
    introText: 'ARMEEBOX macht das Bestellen von Fresspäckli für Soldaten einfach, modern und übersichtlich. Ohne Einkaufsstress, ohne gewöhnlichen Webshop.',
    start: 'Zum Automat',
    skip: 'Intro überspringen',
    shopKicker: 'Shop',
    shopTitle: 'ARMEEBOX Automat',
    slotCount: '15 Slots Standard',
    displayLabel: 'Info',
    displayTitle: 'Einfach, modern, übersichtlich',
    displayText: 'Die Zahlungsarten kommen erst im Warenkorb / Checkout. Dieser erste Schritt zeigt den sauberen Eintritt, das Intro, den Shop-Aufbau und die mobile Ordnung der Slots.',
    displayHelper: 'STEP 1: Fokus auf Struktur, Sprache, Intro, Shop und Navigation.',
    toCart: 'Zum Warenkorb',
    pages: {
      idea: {
        title: 'Grundidee ARMEEBOX',
        body: `
          <p>ARMEEBOX ist die moderne Bestellplattform für Fresspäckli an Soldaten und Rekruten. Angehörige, Freunde oder die Soldaten selbst können unkompliziert bestellen.</p>
          <h3>Warum ARMEEBOX?</h3>
          <ul>
            <li>Kein gewöhnlicher Webshop, sondern ein klarer virtueller Automat</li>
            <li>Einfacher Ablauf für Kaserne oder Privatadresse</li>
            <li>Mobil und Desktop sauber nutzbar</li>
          </ul>
        `,
      },
      agb: {
        title: 'AGB',
        body: `
          <p>Die finalen AGB-Texte werden später im Admin gepflegt. In der Full-Version kannst du diese Inhalte direkt selbst verwalten.</p>
          <p>Dieser Schritt zeigt bewusst den sauberen Seitenfluss und die Rückkehr zum Shop.</p>
        `,
      },
      contact: {
        title: 'Kontakt',
        body: `
          <p>Kontakt: support@armeebox.ch</p>
          <p>Bestellungen später an: order@armeebox.ch</p>
          <p>In der nächsten Stufe wird hier das echte Kontaktformular angebunden.</p>
        `,
      },
    },
    langToggle: 'FR',
    home: 'Shop',
    back: '← Zurück zum Shop',
  },
  fr: {
    introEyebrow: 'Distributeur virtuel pour colis gourmands',
    introTitle: 'Commander vite. Faire plaisir avec style.',
    introText: 'ARMEEBOX simplifie la commande de colis pour les soldats avec une expérience moderne, claire et différente d’une boutique classique.',
    start: 'Vers le distributeur',
    skip: 'Passer l’intro',
    shopKicker: 'Boutique',
    shopTitle: 'Distributeur ARMEEBOX',
    slotCount: '15 slots standard',
    displayLabel: 'Info',
    displayTitle: 'Simple, moderne, clair',
    displayText: 'Les moyens de paiement apparaîtront plus tard dans le panier / checkout. Cette première étape montre l’entrée, l’intro, la structure du shop et l’ordre mobile des slots.',
    displayHelper: 'STEP 1: focus sur la structure, la langue, l’intro, le shop et la navigation.',
    toCart: 'Vers le panier',
    pages: {
      idea: {
        title: 'Idée ARMEEBOX',
        body: `
          <p>ARMEEBOX est une plateforme moderne pour commander des colis gourmands destinés aux soldats et recrues. Famille, amis ou soldats eux-mêmes peuvent commander facilement.</p>
          <h3>Pourquoi ARMEEBOX ?</h3>
          <ul>
            <li>Pas une boutique classique, mais un distributeur virtuel clair</li>
            <li>Processus simple pour caserne ou adresse privée</li>
            <li>Utilisation propre sur mobile et desktop</li>
          </ul>
        `,
      },
      agb: {
        title: 'CGV',
        body: `
          <p>Les textes finaux des CGV seront gérés plus tard via l’admin. Dans la version complète, tu pourras modifier ces contenus toi-même.</p>
          <p>Cette étape montre volontairement le bon flux de navigation et le retour vers le shop.</p>
        `,
      },
      contact: {
        title: 'Contact',
        body: `
          <p>Contact : support@armeebox.ch</p>
          <p>Commandes plus tard à : order@armeebox.ch</p>
          <p>Le vrai formulaire de contact sera branché dans l’étape suivante.</p>
        `,
      },
    },
    langToggle: 'DE',
    home: 'Shop',
    back: '← Retour au shop',
  },
};

const products = Array.from({ length: 15 }, (_, i) => ({
  slot: i + 1,
  name: i % 3 === 0 ? 'Snack Box' : i % 3 === 1 ? 'Power Pack' : 'Süsses Paket',
  desc: i % 3 === 0 ? 'Salzige Snacks und kleine Überraschungen.' : i % 3 === 1 ? 'Mix aus Energie, Getränken und Extras.' : 'Süsse Auswahl für kleine Aufmerksamkeiten.',
  price: (9.9 + i).toFixed(2),
}));

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove('screen--active'));
  screens[name].classList.add('screen--active');
  if (name === 'shop') screens.shop.style.display = 'flex';
  else screens.shop.style.display = 'none';
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('armeebox_lang', lang);
  renderIntro();
  renderShop();
}

function renderIntro() {
  const t = copy[state.lang];
  document.getElementById('intro-eyebrow').textContent = t.introEyebrow;
  document.getElementById('intro-title').textContent = t.introTitle;
  document.getElementById('intro-text').textContent = t.introText;
  document.getElementById('intro-start').textContent = t.start;
  document.getElementById('intro-skip').textContent = t.skip;
}

function renderShop() {
  const t = copy[state.lang];
  document.getElementById('shop-kicker').textContent = t.shopKicker;
  document.getElementById('shop-title').textContent = t.shopTitle;
  document.getElementById('slot-count-pill').textContent = t.slotCount;
  document.getElementById('display-label').textContent = t.displayLabel;
  document.getElementById('display-title').textContent = t.displayTitle;
  document.getElementById('display-text').textContent = t.displayText;
  document.getElementById('display-helper').textContent = t.displayHelper;
  document.getElementById('to-cart-btn').textContent = t.toCart;
  document.getElementById('lang-toggle').textContent = t.langToggle;
  document.getElementById('nav-home').textContent = t.home;
  document.getElementById('back-to-shop').textContent = t.back;

  const grid = document.getElementById('slots-grid');
  grid.innerHTML = products.map((item) => `
    <article class="slot">
      <span class="slot-number">${item.slot}</span>
      <div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
      <div class="slot-price">CHF ${item.price}</div>
    </article>
  `).join('');
}

function openPage(key) {
  const t = copy[state.lang].pages[key];
  document.getElementById('page-title').textContent = t.title;
  document.getElementById('page-body').innerHTML = t.body;
  showScreen('page');
}

document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
    showScreen('intro');
  });
});

document.getElementById('intro-start').addEventListener('click', () => showScreen('shop'));
document.getElementById('intro-skip').addEventListener('click', () => showScreen('shop'));
document.getElementById('to-cart-btn').addEventListener('click', () => alert(state.lang === 'de' ? 'Warenkorb kommt in STEP 2.' : 'Le panier arrive à l’étape 2.'));
document.getElementById('back-to-shop').addEventListener('click', () => showScreen('shop'));
document.getElementById('nav-home').addEventListener('click', () => showScreen('shop'));
document.getElementById('lang-toggle').addEventListener('click', () => {
  setLanguage(state.lang === 'de' ? 'fr' : 'de');
  const activeScreen = Object.entries(screens).find(([, el]) => el.classList.contains('screen--active'))?.[0];
  if (activeScreen === 'page') showScreen('page');
});
document.querySelectorAll('[data-page]').forEach((btn) => {
  btn.addEventListener('click', () => openPage(btn.dataset.page));
});

if (state.lang) {
  renderIntro();
  renderShop();
  showScreen('intro');
} else {
  showScreen('language');
}
