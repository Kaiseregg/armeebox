
const PRODUCTS = [
  {
    "id": 1,
    "slot": "01",
    "name": {
      "de": "Snack Box",
      "fr": "Snack Box"
    },
    "price": 8
  },
  {
    "id": 2,
    "slot": "02",
    "name": {
      "de": "Power Pack",
      "fr": "Power Pack"
    },
    "price": 8
  },
  {
    "id": 3,
    "slot": "03",
    "name": {
      "de": "Sweet Pack",
      "fr": "Sweet Pack"
    },
    "price": 10
  },
  {
    "id": 4,
    "slot": "04",
    "name": {
      "de": "Classic Box",
      "fr": "Classic Box"
    },
    "price": 12
  },
  {
    "id": 5,
    "slot": "05",
    "name": {
      "de": "Snack Box",
      "fr": "Snack Box"
    },
    "price": 8
  },
  {
    "id": 6,
    "slot": "06",
    "name": {
      "de": "Power Pack",
      "fr": "Power Pack"
    },
    "price": 8
  },
  {
    "id": 7,
    "slot": "07",
    "name": {
      "de": "Energy Pack",
      "fr": "Energy Pack"
    },
    "price": 10
  },
  {
    "id": 8,
    "slot": "08",
    "name": {
      "de": "Classic Box",
      "fr": "Classic Box"
    },
    "price": 12
  },
  {
    "id": 9,
    "slot": "09",
    "name": {
      "de": "Snack Box",
      "fr": "Snack Box"
    },
    "price": 8
  },
  {
    "id": 10,
    "slot": "10",
    "name": {
      "de": "Power Pack",
      "fr": "Power Pack"
    },
    "price": 8
  },
  {
    "id": 11,
    "slot": "11",
    "name": {
      "de": "Sweet Pack",
      "fr": "Sweet Pack"
    },
    "price": 10
  },
  {
    "id": 12,
    "slot": "12",
    "name": {
      "de": "Classic Box",
      "fr": "Classic Box"
    },
    "price": 12
  },
  {
    "id": 13,
    "slot": "13",
    "name": {
      "de": "Snack Box",
      "fr": "Snack Box"
    },
    "price": 8
  },
  {
    "id": 14,
    "slot": "14",
    "name": {
      "de": "Power Pack",
      "fr": "Power Pack"
    },
    "price": 8
  },
  {
    "id": 15,
    "slot": "15",
    "name": {
      "de": "Energy Pack",
      "fr": "Energy Pack"
    },
    "price": 10
  },
  {
    "id": 16,
    "slot": "16",
    "name": {
      "de": "Classic Box",
      "fr": "Classic Box"
    },
    "price": 12
  }
];
const BARRACKS = [
  {
    "label": "FU OS 30",
    "full": "FU OS 30\nName/Vorname\nKp:           Zug:\nLehrgebäude 1\nKaserne\n8180 Bülach",
    "address_lines": [
      "Lehrgebäude 1",
      "Kaserne",
      "8180 Bülach"
    ]
  },
  {
    "label": "San S 42",
    "full": "San S 42\nName/Vorname\nKp:           Zug:\nVia della Stazione 51 (Albinengo)\n6780 Airolo",
    "address_lines": [
      "Via della Stazione 51 (Albinengo)",
      "6780 Airolo"
    ]
  },
  {
    "label": "Höh Uof LG 49",
    "full": "Höh Uof LG 49\nName/Vorname\nKp:           Zug:\nMK der Berner Truppen\n3000 Bern 22",
    "address_lines": [
      "MK der Berner Truppen",
      "3000 Bern 22"
    ]
  },
  {
    "label": "Militärmusik",
    "full": "Militärmusik\nName/Vorname\nKp:           Zug:\nKaserne\n3000 Bern 22",
    "address_lines": [
      "Kaserne",
      "3000 Bern 22"
    ]
  },
  {
    "label": "Log OS 40",
    "full": "Log OS 40\nName/Vorname\nKp:           Zug:\nKaserne\n3000 Bern 22",
    "address_lines": [
      "Kaserne",
      "3000 Bern 22"
    ]
  },
  {
    "label": "Inf DD S 14",
    "full": "Inf DD S 14\nName/Vorname\nKp:           Zug:\nKaserne Reppischtal\n8903 Birmensdorf ZH",
    "address_lines": [
      "Kaserne Reppischtal",
      "8903 Birmensdorf ZH"
    ]
  },
  {
    "label": "Art/Aufkl S 31",
    "full": "Art/Aufkl S 31\nName/Vorname\nKp:           Zug:\nKaserne\n1145 Bière",
    "address_lines": [
      "Kaserne",
      "1145 Bière"
    ]
  },
  {
    "label": "Ei + Ausb  G/Rttg 74",
    "full": "Ei + Ausb  G/Rttg 74\nName/Vorname\nKp:           Zug:\nKaserne/Siechenhaus\n5620 Bremgarten",
    "address_lines": [
      "Kaserne/Siechenhaus",
      "5620 Bremgarten"
    ]
  },
  {
    "label": "Genieschule 73",
    "full": "Genieschule 73\nName/Vorname\nKp:           Zug:\nKaserne\n5200 Brugg",
    "address_lines": [
      "Kaserne",
      "5200 Brugg"
    ]
  },
  {
    "label": "FU S 63",
    "full": "FU S 63\nName/Vorname\nKp:           Zug:\nLehrgebäude 2\nKaserne\n8180 Bülach",
    "address_lines": [
      "Lehrgebäude 2",
      "Kaserne",
      "8180 Bülach"
    ]
  },
  {
    "label": "Infanterieschule 12",
    "full": "Infanterieschule 12\nName/Vorname\nKp:           Zug:\nKaserne\n7000 Chur",
    "address_lines": [
      "Kaserne",
      "7000 Chur"
    ]
  },
  {
    "label": "Inf S 2",
    "full": "Inf S 2\nName/Vorname\nKp:           Zug:\nChemin de Planeyse 12\n2013 Colombier",
    "address_lines": [
      "Chemin de Planeyse 12",
      "2013 Colombier"
    ]
  },
  {
    "label": "Ns S 45",
    "full": "Ns S 45\nName/Vorname\nKp:           Zug:\nKaserne\n1680 Romont",
    "address_lines": [
      "Kaserne",
      "1680 Romont"
    ]
  },
  {
    "label": "BODLUV S 33",
    "full": "BODLUV S 33\nName/Vorname\nKp:           Zug:\nKaserne\n6032 Emmen",
    "address_lines": [
      "Kaserne",
      "6032 Emmen"
    ]
  },
  {
    "label": "LW OS",
    "full": "LW OS\nName/Vorname\nKp:           Zug:\nKaserne\n6032 Emmen",
    "address_lines": [
      "Kaserne",
      "6032 Emmen"
    ]
  },
  {
    "label": "Pil S LW 85",
    "full": "Pil S LW 85\nName/Vorname\nKp:           Zug:\nMilitärflugplatz Halle 1\n6032 Emmen",
    "address_lines": [
      "Militärflugplatz Halle 1",
      "6032 Emmen"
    ]
  },
  {
    "label": "Ik Schule 61",
    "full": "Ik Schule 61\nName/Vorname\nKp:           Zug:\nWydenstrasse 18\n8500 Frauenfeld",
    "address_lines": [
      "Wydenstrasse 18",
      "8500 Frauenfeld"
    ]
  },
  {
    "label": "Ausbildungszentrum der Rettungstruppen (AZR 76)",
    "full": "Ausbildungszentrum der Rettungstruppen (AZR 76)\nName/Vorname\nKp:           Zug:\nChemin de Couchefatte 42\n1237 Avully",
    "address_lines": [
      "Chemin de Couchefatte 42",
      "1237 Avully"
    ]
  },
  {
    "label": "BUSA",
    "full": "BUSA\nName/Vorname\nKp:           Zug:\nKasernenstrasse 40\n9100 Herisau",
    "address_lines": [
      "Kasernenstrasse 40",
      "9100 Herisau"
    ]
  },
  {
    "label": "Ausbildungszentrum Spezialkräfte (AZ SK)",
    "full": "Ausbildungszentrum Spezialkräfte (AZ SK)\nName/Vorname\nKp:           Zug:\nCaserma\n6810 Isone",
    "address_lines": [
      "Caserma",
      "6810 Isone"
    ]
  },
  {
    "label": "Elo Op Schule 64",
    "full": "Elo Op Schule 64\nName/Vorname\nKp:           Zug:\nKaserne Jassbach\n3609 Thun",
    "address_lines": [
      "Kaserne Jassbach",
      "3609 Thun"
    ]
  },
  {
    "label": "Ristl Schule 62",
    "full": "Ristl Schule 62\nName/Vorname\nKp:           Zug:\nKommandohaus 2\nKaserne\n8302 Kloten",
    "address_lines": [
      "Kommandohaus 2",
      "Kaserne",
      "8302 Kloten"
    ]
  },
  {
    "label": "Inf OS 10",
    "full": "Inf OS 10\nName/Vorname\nKp:           Zug:\nKaserne\n4410 Liestal",
    "address_lines": [
      "Kaserne",
      "4410 Liestal"
    ]
  },
  {
    "label": "Kader- und Fachschule",
    "full": "Kader- und Fachschule\nName/Vorname\nKp:           Zug:\nArmee-Ausbildungszentrum\nMurmattweg 6\n6000 Luzern 30",
    "address_lines": [
      "Armee-Ausbildungszentrum",
      "Murmattweg 6",
      "6000 Luzern 30"
    ]
  },
  {
    "label": "Zentralschule",
    "full": "Zentralschule\nName/Vorname\nKp:           Zug:\nArmee-Ausbildungszentrum\nMurmattweg 6\n6000 Luzern 30",
    "address_lines": [
      "Armee-Ausbildungszentrum",
      "Murmattweg 6",
      "6000 Luzern 30"
    ]
  },
  {
    "label": "Generalstabsschule",
    "full": "Generalstabsschule\nName/Vorname\nKp:           Zug:\nArmee-Ausbildungszentrum\nMurmattweg 6\n6000 Luzern 30",
    "address_lines": [
      "Armee-Ausbildungszentrum",
      "Murmattweg 6",
      "6000 Luzern 30"
    ]
  },
  {
    "label": "Komp Zen Sport A",
    "full": "Komp Zen Sport A\nName/Vorname\nKp:           Zug:\nHauptstrasse 247\n2532 Magglingen / Macolin",
    "address_lines": [
      "Hauptstrasse 247",
      "2532 Magglingen / Macolin"
    ]
  },
  {
    "label": "Spit S 41",
    "full": "Spit S 41\nName/Vorname\nKp:           Zug:\nWaffenplatz Moudon\n1510 Moudon",
    "address_lines": [
      "Waffenplatz Moudon",
      "1510 Moudon"
    ]
  },
  {
    "label": "Flieger Schule 81",
    "full": "Flieger Schule 81\nName/Vorname\nKp:           Zug:\nFlieger Kaserne\n1530 Payerne",
    "address_lines": [
      "Flieger Kaserne",
      "1530 Payerne"
    ]
  },
  {
    "label": "Fl Br 31",
    "full": "Fl Br 31\nName/Vorname\nKp:           Zug:\nCaserne DCA\n1530 Payerne",
    "address_lines": [
      "Caserne DCA",
      "1530 Payerne"
    ]
  },
  {
    "label": "Komp Zen Vet D u A Tiere",
    "full": "Komp Zen Vet D u A Tiere\nName/Vorname\nKp:           Zug:\nKaserne Sand\n3000 Bern 22",
    "address_lines": [
      "Kaserne Sand",
      "3000 Bern 22"
    ]
  },
  {
    "label": "Inf S 19",
    "full": "Inf S 19\nName/Vorname\nKp:           Zug:\nKaserne\n1950 Sion",
    "address_lines": [
      "Kaserne",
      "1950 Sion"
    ]
  },
  {
    "label": "ABC Abwehrschule 77",
    "full": "ABC Abwehrschule 77\nName/Vorname\nKp:           Zug:\nABC Zentrum\n3700 Spiez",
    "address_lines": [
      "ABC Zentrum",
      "3700 Spiez"
    ]
  },
  {
    "label": "Inf S 11",
    "full": "Inf S 11\nName/Vorname\nKp:           Zug:\nKaserne\n9000 St. Gallen",
    "address_lines": [
      "Kaserne",
      "9000 St. Gallen"
    ]
  },
  {
    "label": "Ausb Zen Vpf",
    "full": "Ausb Zen Vpf\nName/Vorname\nKp:           Zug:\nKaserne\n3609 Thun",
    "address_lines": [
      "Kaserne",
      "3609 Thun"
    ]
  },
  {
    "label": "Ih Schule 43",
    "full": "Ih Schule 43\nName/Vorname\nKp:           Zug:\nKaserne AKLA, Halle 5\n3609 Thun",
    "address_lines": [
      "Kaserne AKLA, Halle 5",
      "3609 Thun"
    ]
  },
  {
    "label": "Pz/Art OS 22",
    "full": "Pz/Art OS 22\nName/Vorname\nKp:           Zug:\nKaserne\n3609 Thun",
    "address_lines": [
      "Kaserne",
      "3609 Thun"
    ]
  },
  {
    "label": "Pz S 21",
    "full": "Pz S 21\nName/Vorname\nKp:           Zug:\nKaserne\n3609 Thun",
    "address_lines": [
      "Kaserne",
      "3609 Thun"
    ]
  },
  {
    "label": "Rttg S 75",
    "full": "Rttg S 75\nName/Vorname\nKp:           Zug:\nKaserne\n3380 Wangen a/A",
    "address_lines": [
      "Kaserne",
      "3380 Wangen a/A"
    ]
  },
  {
    "label": "VT Schulen 47",
    "full": "VT Schulen 47\nName/Vorname\nKp:           Zug:\nAltes Zeughaus Logistik 2\n3380 Wangen an der Aare",
    "address_lines": [
      "Altes Zeughaus Logistik 2",
      "3380 Wangen an der Aare"
    ]
  },
  {
    "label": "VT Schulen 47",
    "full": "VT Schulen 47\nName/Vorname\nKp:           Zug:\nKaserne Drognens\n1680 Drognens",
    "address_lines": [
      "Kaserne Drognens",
      "1680 Drognens"
    ]
  },
  {
    "label": "Ausbildungszentrum SWISSINT / Waffenplatz Kommando Wil",
    "full": "Ausbildungszentrum SWISSINT / Waffenplatz Kommando Wil\nName/Vorname\nKp:           Zug:\nKasernenstrasse 4\n6370 Stans-Oberdorf",
    "address_lines": [
      "Kasernenstrasse 4",
      "6370 Stans-Oberdorf"
    ]
  }
];
const texts = {
  de: {
    langTitle: 'Sprache wählen',
    smallTitle: 'VIRTUELLER AUTOMAT FÜR FRESSPÄCKLI',
    introTitle: 'Achtung, fertig, Fresspäckli',
    introCopy: 'Wir liefern dein Nachschub in die Kaserne und danach zu dir nach Hause',
    toMachine: 'Zum Automaten',
    machineTitle: 'ARMEEBOX Automat',
    machineInner: 'Achtung, fertig, Fresspäckli',
    order: 'Bestellen',
    cart: 'Warenkorb',
    empty: 'Noch leer',
    shippingBarracks: 'Versand Kaserne',
    shippingPrivate: 'Versand Privat',
    free: 'Gratis',
    plus9: 'Versand CHF 9.00',
    chooseBarracks: 'Kaserne auswählen',
    sender: 'Absender',
    senderName: 'Name / Firma',
    senderStreet: 'Strasse / Nr.',
    senderZip: 'PLZ / Ort',
    soldierMsg: 'Nachricht an den Soldaten',
    firstName: 'Vorname',
    lastName: 'Name',
    kp: 'Kp',
    zug: 'Zug',
    privateAddress: 'Privatadresse',
    street: 'Strasse / Nr.',
    zip: 'PLZ / Ort',
    email: 'E-Mail',
    phone: 'Telefon',
    reviewTitle: 'Bestellung prüfen',
    backMachine: 'Zurück zum Automaten',
    backForm: 'Zurück zum Formular',
    sendOrder: 'Bestellung abschicken',
    summary: 'Bestellübersicht',
    subtotal: 'Zwischentotal',
    shipping: 'Versand',
    total: 'Gesamt',
    note: 'Diese Angaben sollen später im Admin-Dashboard und auf dem Lieferschein erscheinen.',
    confirmTitle: 'Bestellung eingegangen',
    confirmCopy: 'Die Bestellung wurde für den nächsten Projekt-Schritt vorbereitet. Später wird sie gespeichert und im Admin-Dashboard sichtbar sein.',
    newOrder: 'Neue Bestellung',
    remove: 'Entfernen'
  },
  fr: {
    langTitle: 'Choisir la langue',
    smallTitle: 'AUTOMATE VIRTUEL POUR PAQUETS DU SOLDAT',
    introTitle: 'À vos marques, prêts, paquet du soldat',
    introCopy: 'Nous livrons ton ravitaillement à la caserne puis à ton domicile',
    toMachine: "Vers l’automate",
    machineTitle: 'ARMEEBOX Automat',
    machineInner: 'À vos marques, prêts, paquet du soldat',
    order: 'Commander',
    cart: 'Panier',
    empty: 'Encore vide',
    shippingBarracks: 'Envoi caserne',
    shippingPrivate: 'Envoi privé',
    free: 'Gratuit',
    plus9: 'Envoi CHF 9.00',
    chooseBarracks: 'Choisir la caserne',
    sender: 'Expéditeur',
    senderName: 'Nom / Société',
    senderStreet: 'Rue / N°',
    senderZip: 'NPA / Ville',
    soldierMsg: 'Message au soldat',
    firstName: 'Prénom',
    lastName: 'Nom',
    kp: 'Compagnie',
    zug: 'Section',
    privateAddress: 'Adresse privée',
    street: 'Rue / N°',
    zip: 'NPA / Ville',
    email: 'E-mail',
    phone: 'Téléphone',
    reviewTitle: 'Vérifier la commande',
    backMachine: 'Retour à l’automate',
    backForm: 'Retour au formulaire',
    sendOrder: 'Envoyer la commande',
    summary: 'Résumé de commande',
    subtotal: 'Sous-total',
    shipping: 'Envoi',
    total: 'Total',
    note: 'Ces informations doivent plus tard apparaître dans le tableau de bord admin et sur le bon de livraison.',
    confirmTitle: 'Commande reçue',
    confirmCopy: 'La commande a été préparée pour la prochaine étape du projet. Plus tard elle sera enregistrée et visible dans le tableau de bord admin.',
    newOrder: 'Nouvelle commande',
    remove: 'Retirer'
  }
};
const state = {
  lang: 'de',
  route: 'language',
  cart: [],
  shipping: 'barracks',
  form: {
    barracksIndex: 0,
    soldierFirstName: '',
    soldierLastName: '',
    soldierKp: '',
    soldierZug: '',
    senderName: '',
    senderStreet: '',
    senderZip: '',
    message: '',
    privateName: '',
    privateStreet: '',
    privateZip: '',
    privateEmail: '',
    privatePhone: ''
  }
};
const app = document.getElementById('app');
function money(n){ return `Fr. ${n}.–`; }
function t(k){ return texts[state.lang][k] ?? k; }
function save(){ localStorage.setItem('armeebox_preview_state_v12', JSON.stringify(state)); }
function load(){ try{ const d=JSON.parse(localStorage.getItem('armeebox_preview_state_v12')); if(d) Object.assign(state,d);}catch(e){} }
load();
function currentBarracks(){ return BARRACKS[state.form.barracksIndex] || BARRACKS[0]; }
function cartItemsDetailed(){ return state.cart.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean); }
function cartGrouped(){
  const map = new Map();
  for (const p of cartItemsDetailed()){
    if(!map.has(p.id)) map.set(p.id,{...p, qty:0});
    map.get(p.id).qty++;
  }
  return [...map.values()];
}
function subtotal(){ return cartItemsDetailed().reduce((a,p)=>a+p.price,0); }
function shippingCost(){ return state.shipping==='private' ? 9 : 0; }
function total(){ return subtotal()+shippingCost(); }
function setRoute(route){ state.route=route; save(); render(); }
function updateHash(){
  const map={language:'#language',intro:'#intro',shop:'#shop',order:'#order',review:'#review',confirmation:'#confirmation'};
  if(location.hash!==map[state.route]) history.replaceState(null,'',map[state.route]);
}
window.addEventListener('hashchange',()=>{ const h=location.hash.replace('#',''); if(['language','intro','shop','order','review','confirmation'].includes(h)){ state.route=h; render(); }});
function onSelectProduct(id){ state.cart.push(id); save(); render(); }
function removeOne(id){ const idx=state.cart.indexOf(id); if(idx>-1) state.cart.splice(idx,1); save(); render(); }

function renderLanguage(){
  return `
  <div class="page hero-box">
    <div class="hero-card language-card">
      <img class="hero-logo" src="../public/logo.svg" alt="ARMEEBOX">
      <div class="goldline">ARMEBOX.CH</div>
      <h1 class="hero-title" style="font-size:62px">${t('langTitle')}</h1>
      <div class="lang-row">
        <button class="lang-btn" data-lang="de">Deutsch</button>
        <button class="lang-btn" data-lang="fr">Français</button>
      </div>
    </div>
  </div>`;
}
function renderIntro(){
  return `
  <div class="page hero-box">
    <div class="hero-card">
      <div class="goldline">${t('smallTitle')}</div>
      <img class="hero-logo" src="../public/logo.svg" alt="ARMEEBOX">
      <h1 class="hero-title">${t('introTitle')}</h1>
      <p class="hero-copy">${t('introCopy')}</p>
      <div class="hero-actions"><button class="cta primary" id="toShopBtn">${t('toMachine')}</button></div>
    </div>
  </div>`;
}
function renderMachine(){
  const grouped=cartGrouped();
  return `
  <div class="topbar"><img src="../public/logo.svg" alt="ARMEEBOX"></div>
  <div class="page">
    <div class="shell">
      <div class="header-row"><h1>${t('machineTitle')}</h1></div>
      <div class="machine"><div class="machine-red"><div class="machine-inner">
        <div class="machine-banner">${t('machineInner')}</div>
        <div><div class="grid">
          ${PRODUCTS.map(p=>`
          <button class="slot" data-id="${p.id}">
            <div class="slot-top">
              <div class="badge">${p.slot}</div>
              <div class="img-placeholder">SPÄTER BILD</div>
              <div class="spirals">◜◜◜</div>
            </div>
            <div class="price">${money(p.price)}</div>
            <div class="namebar">${p.name[state.lang]}</div>
            <div class="select-light"><span></span></div>
          </button>`).join('')}
        </div></div>
        <aside class="side">
          <div class="led">
            <div class="line"><span class="currency">Fr.</span><span class="amount">${total()}</span></div>
            <div class="line"><span class="small">${t('total')}:</span><span class="small">${state.cart.length}</span></div>
          </div>
          <div class="cartbox">
            <h3>${t('cart')}</h3>
            <div class="cart-list">
              ${grouped.length ? grouped.map(item=>`
              <div class="cart-item">
                <div><strong>${item.name[state.lang]}</strong><div>x${item.qty}</div></div>
                <div>${money(item.price*item.qty)}</div>
                <button class="remove-btn" data-remove="${item.id}" aria-label="${t('remove')}">×</button>
              </div>`).join('') : `<div class="note">${t('empty')}</div>`}
            </div>
          </div>
          <button class="order-btn" id="goOrderBtn">${t('order')}</button>
          <div class="dots"><span class="dot"></span><span class="dot green"></span></div>
        </aside>
      </div></div></div>
    </div>
  </div>`;
}
function renderForm(){
  const b=currentBarracks(); const grouped=cartGrouped();
  return `
  <div class="topbar"><img src="../public/logo.svg" alt="ARMEEBOX"></div>
  <div class="page">
    <div class="shell">
      <div class="review-actions" style="margin-bottom:16px"><button class="back-btn" id="backMachineBtn">← ${t('backMachine')}</button></div>
      <div class="form-layout">
        <div class="card">
          <h2>${t('order')}</h2>
          <div class="radio-grid">
            <label class="radio-card"><input type="radio" name="shipping" value="barracks" ${state.shipping==='barracks'?'checked':''}> <div><strong>${t('shippingBarracks')}</strong><div class="note">${t('free')}</div></div></label>
            <label class="radio-card"><input type="radio" name="shipping" value="private" ${state.shipping==='private'?'checked':''}> <div><strong>${t('shippingPrivate')}</strong><div class="note">${t('plus9')}</div></div></label>
          </div>
          ${state.shipping==='barracks' ? `
          <div class="field">
            <label>${t('chooseBarracks')}</label>
            <select id="barracksSelect">${BARRACKS.map((x,i)=>`<option value="${i}" ${state.form.barracksIndex===i?'selected':''}>${x.label}</option>`).join('')}</select>
            <div class="card" style="padding:12px;margin-top:6px"><strong>${b.label}</strong><br>${b.address_lines.join('<br>')}</div>
          </div>
          <div class="two-col">
            <div class="field"><label>${t('firstName')}</label><input id="soldierFirstName" value="${state.form.soldierFirstName}"></div>
            <div class="field"><label>${t('lastName')}</label><input id="soldierLastName" value="${state.form.soldierLastName}"></div>
          </div>
          <div class="two-col">
            <div class="field"><label>${t('kp')}</label><input id="soldierKp" value="${state.form.soldierKp}"></div>
            <div class="field"><label>${t('zug')}</label><input id="soldierZug" value="${state.form.soldierZug}"></div>
          </div>
          <div class="card">
            <h3>${t('sender')}</h3>
            <div class="two-col">
              <div class="field"><label>${t('senderName')}</label><input id="senderName" value="${state.form.senderName}"></div>
              <div class="field"><label>${t('senderStreet')}</label><input id="senderStreet" value="${state.form.senderStreet}"></div>
            </div>
            <div class="field"><label>${t('senderZip')}</label><input id="senderZip" value="${state.form.senderZip}"></div>
          </div>
          <div class="field"><label>${t('soldierMsg')}</label><textarea id="message">${state.form.message}</textarea></div>
          ` : `
          <div class="card">
            <h3>${t('privateAddress')}</h3>
            <div class="field"><label>${t('senderName')}</label><input id="privateName" value="${state.form.privateName}"></div>
            <div class="field"><label>${t('street')}</label><input id="privateStreet" value="${state.form.privateStreet}"></div>
            <div class="field"><label>${t('zip')}</label><input id="privateZip" value="${state.form.privateZip}"></div>
            <div class="two-col">
              <div class="field"><label>${t('email')}</label><input id="privateEmail" value="${state.form.privateEmail}"></div>
              <div class="field"><label>${t('phone')}</label><input id="privatePhone" value="${state.form.privatePhone}"></div>
            </div>
          </div>`}
        </div>
        <div class="card">
          <h2>${t('summary')}</h2>
          <div class="review-box">
            ${grouped.length ? grouped.map(item=>`
            <div class="summary-line"><span>${item.name[state.lang]} x${item.qty}</span><strong>${money(item.price*item.qty)}</strong></div>`).join('') : `<div class="note">${t('empty')}</div>`}
            <div class="summary-line"><span>${t('subtotal')}</span><strong>${money(subtotal())}</strong></div>
            <div class="summary-line"><span>${t('shipping')}</span><strong>${money(shippingCost())}</strong></div>
            <div class="summary-line"><span>${t('total')}</span><strong>${money(total())}</strong></div>
            <button class="order-btn" id="reviewBtn">${t('reviewTitle')}</button>
            <div class="note">${t('note')}</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
function renderReview(){
  const grouped=cartGrouped(); const b=currentBarracks();
  return `
  <div class="topbar"><img src="../public/logo.svg" alt="ARMEEBOX"></div>
  <div class="page">
    <div class="shell">
      <h1 style="margin-top:0">${t('reviewTitle')}</h1>
      <div class="review-layout">
        <div class="card">
          <h3>${t('summary')}</h3>
          ${grouped.map(item=>`<div class="summary-line"><span>${item.name[state.lang]} x${item.qty}</span><strong>${money(item.price*item.qty)}</strong></div>`).join('')}
          <div class="summary-line"><span>${t('subtotal')}</span><strong>${money(subtotal())}</strong></div>
          <div class="summary-line"><span>${t('shipping')}</span><strong>${money(shippingCost())}</strong></div>
          <div class="summary-line"><span>${t('total')}</span><strong>${money(total())}</strong></div>
          <div class="review-actions" style="margin-top:18px">
            <button class="back-btn" id="reviewBackMachine">← ${t('backMachine')}</button>
            <button class="back-btn" id="reviewBackForm">← ${t('backForm')}</button>
            <button class="cta primary" id="submitOrderBtn">${t('sendOrder')}</button>
          </div>
        </div>
        <div class="card">
          <h3>Lieferschein-Hinweis</h3>
          ${state.shipping==='barracks' ? `
          <div><strong>${t('shippingBarracks')}</strong><br>${b.label}<br>${state.form.soldierFirstName} ${state.form.soldierLastName}<br>Kp: ${state.form.soldierKp} / Zug: ${state.form.soldierZug}<br>${b.address_lines.join('<br>')}</div>
          <hr><div><strong>${t('sender')}</strong><br>${state.form.senderName}<br>${state.form.senderStreet}<br>${state.form.senderZip}</div>
          <hr><div><strong>${t('soldierMsg')}</strong><br>${state.form.message || '-'}</div>` : `
          <div><strong>${t('shippingPrivate')}</strong><br>${state.form.privateName}<br>${state.form.privateStreet}<br>${state.form.privateZip}<br>${state.form.privateEmail}<br>${state.form.privatePhone}</div>`}
        </div>
      </div>
    </div>
  </div>`;
}
function renderConfirm(){
  return `
  <div class="topbar"><img src="../public/logo.svg" alt="ARMEEBOX"></div>
  <div class="page center">
    <div class="hero-card confirm-card">
      <h1 class="hero-title" style="font-size:56px">${t('confirmTitle')}</h1>
      <p class="hero-copy" style="font-size:22px">${t('confirmCopy')}</p>
      <div class="review-actions">
        <button class="back-btn" id="confirmBackMachine">${t('backMachine')}</button>
        <button class="cta primary" id="newOrderBtn">${t('newOrder')}</button>
      </div>
    </div>
  </div>`;
}
function bindCommon(){
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.onclick=()=>{ state.lang=btn.dataset.lang; setRoute('intro'); });
}
function bindMachine(){
  document.querySelectorAll('.slot').forEach(el=>el.onclick=()=>onSelectProduct(Number(el.dataset.id)));
  document.querySelectorAll('[data-remove]').forEach(el=>el.onclick=(e)=>{ e.stopPropagation(); removeOne(Number(el.dataset.remove)); });
  const orderBtn=document.getElementById('goOrderBtn'); if(orderBtn) orderBtn.onclick=()=>setRoute('order');
}
function syncFormFields(){
  const ids=['barracksSelect','soldierFirstName','soldierLastName','soldierKp','soldierZug','senderName','senderStreet','senderZip','message','privateName','privateStreet','privateZip','privateEmail','privatePhone'];
  ids.forEach(id=>{
    const el=document.getElementById(id);
    if(!el) return;
    el.oninput = el.onchange = ()=>{
      if(id==='barracksSelect') state.form.barracksIndex = Number(el.value);
      else state.form[id]=el.value;
      save(); render();
    };
  });
  document.querySelectorAll('input[name="shipping"]').forEach(r=>r.onchange=()=>{ state.shipping=r.value; save(); render(); });
  const back=document.getElementById('backMachineBtn'); if(back) back.onclick=()=>setRoute('shop');
  const review=document.getElementById('reviewBtn'); if(review) review.onclick=()=>setRoute('review');
}
function bindReview(){
  document.getElementById('reviewBackMachine').onclick=()=>setRoute('shop');
  document.getElementById('reviewBackForm').onclick=()=>setRoute('order');
  document.getElementById('submitOrderBtn').onclick=()=>setRoute('confirmation');
}
function bindConfirm(){
  document.getElementById('confirmBackMachine').onclick=()=>setRoute('shop');
  document.getElementById('newOrderBtn').onclick=()=>{ state.cart=[]; setRoute('language'); };
}
function render(){
  updateHash();
  let html='';
  if(state.route==='language') html=renderLanguage();
  if(state.route==='intro') html=renderIntro();
  if(state.route==='shop') html=renderMachine();
  if(state.route==='order') html=renderForm();
  if(state.route==='review') html=renderReview();
  if(state.route==='confirmation') html=renderConfirm();
  app.innerHTML=html;
  bindCommon();
  if(state.route==='intro') document.getElementById('toShopBtn').onclick=()=>setRoute('shop');
  if(state.route==='shop') bindMachine();
  if(state.route==='order') syncFormFields();
  if(state.route==='review') bindReview();
  if(state.route==='confirmation') bindConfirm();
}
const initialHash = location.hash.replace('#','');
if(['language','intro','shop','order','review','confirmation'].includes(initialHash)) state.route=initialHash;
render();
