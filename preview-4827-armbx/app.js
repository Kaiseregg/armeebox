
const DEFAULT_PRODUCTS = [
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
    senderEmail: 'E-Mail für Bestellbestätigung',
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
    sendingOrder: 'Bestellung wird gesendet …',
    adminProductsSaving: 'Produkte werden gespeichert …',
    summary: 'Bestellübersicht',
    subtotal: 'Zwischentotal',
    shipping: 'Versand',
    total: 'Gesamt',
    note: '',
    confirmTitle: 'Bestellung erfolgreich eingegangen',
    confirmCopy: 'Deine Bestellung wurde gespeichert. Erst jetzt wurden Warenkorb und Formular zurückgesetzt.',
    confirmOrderNo: 'Bestellnummer',
    confirmEmail: 'Bestätigung an',
    newOrder: 'Neue Bestellung',
    remove: 'Entfernen',
    deliveryDetails: 'Lieferdetails',
    validationCart: 'Bitte mindestens ein Produkt wählen.',
    validationGeneric: 'Bitte alle Pflichtfelder korrekt ausfüllen.',
    validationEmail: 'Bitte eine gültige E-Mail-Adresse eingeben.',
    validationPrivatePhone: 'Bitte eine Telefonnummer eingeben.',
    validationSoldierName: 'Bitte Vorname und Name des Soldaten eingeben.',
    validationSender: 'Bitte Absender komplett ausfüllen.',
    validationPrivateAddress: 'Bitte Privatadresse vollständig ausfüllen.',
    submitError: 'Die Bestellung konnte nicht gespeichert werden. Bitte erneut versuchen.',
    orderSavedAdmin: 'Die Bestellung ist für den Admin-Bereich vorbereitet.',
    formErrorTitle: 'Bitte prüfen',
    shippingMode: 'Versandart',
    orderDate: 'Bestellt am',
    adminLogin: 'Admin Login',
    adminEmail: 'Admin E-Mail',
    adminPassword: 'Passwort',
    adminOpen: 'Admin öffnen',
    adminOrders: 'Bestellungen',
    adminLogout: 'Logout',
    adminRefresh: 'Aktualisieren',
    adminNoOrders: 'Noch keine Bestellungen vorhanden.',
    adminDetails: 'Bestelldetails',
    adminStatus: 'Status',
    adminSaveStatus: 'Status speichern',
    adminBackList: 'Zurück zur Liste',
    adminSearch: 'Suche',
    adminSearchPlaceholder: 'Bestellnummer, E-Mail oder Name',
    adminFilter: 'Filter',
    adminFilterAll: 'Alle',
    adminFilterNew: 'Neu',
    adminFilterProgress: 'In Bearbeitung',
    adminFilterDone: 'Erledigt',
    adminNoResults: 'Keine Bestellungen für diese Suche / diesen Filter.',
    adminShippingBarracks: 'Versand Kaserne',
    adminShippingPrivate: 'Versand Privat',
    adminStatusNew: 'Neu',
    adminStatusInProgress: 'In Bearbeitung',
    adminStatusDone: 'Erledigt',
    adminListHint: 'Suche, Filter und Statusübersicht',
    adminOrderInfo: 'Bestellinfo',
    adminItems: 'Artikel',
    adminDeliveryAddress: 'Lieferadresse',
    adminSender: 'Absender',
    adminContact: 'Kontakt',
    adminMessageMeta: 'Nachricht / Metadaten',
    adminProducts: 'Produkte / Slots',
    adminProductsHint: 'Produkte, Preise und Slot-Belegung verwalten',
    adminBackOrders: 'Zurück zu Bestellungen',
    adminProductsSave: 'Produkte speichern',
    adminProductsRefresh: 'Produkte laden',
    adminAddSlot: 'Slot hinzufügen',
    adminDeleteSlot: 'Slot löschen',
    adminDragHint: 'Per Ziehen verschieben',
    adminProductsSaved: 'Produkte wurden gespeichert.',
    adminSlot: 'Slot',
    adminProductName: 'Produktname',
    adminPrice: 'Preis',
    adminActive: 'Aktiv',
    adminStockTotal: 'Gesamtbestand',
    adminStockCurrent: 'Aktueller Bestand',
    adminStockMin: 'Mindestbestand',
    adminStockStatus: 'Lagerstatus',
    stockOk: 'OK',
    stockLow: 'Knapp',
    stockOut: 'Ausverkauft',
    adminImageUrl: 'Bild-URL',
    adminImageUpload: 'Bild hochladen / hier ablegen',
    adminImageUploading: 'Bild wird hochgeladen …',
    adminImageUploaded: 'Bild wurde hochgeladen und gespeichert.',
    adminNoProducts: 'Noch keine Produkte vorhanden.',
    adminCatalogLoadError: 'Produkte konnten nicht geladen werden.',
    adminSlotType: 'Slot-Typ',
    adminSlotTypeNormal: 'Normaler Slot',
    adminSlotTypeBundle: 'Abo / Fresspäckli',
    adminBundleContent: 'Inhalt / Beschreibung',
    adminBundleOptions: 'Optionen pro Woche (z. B. 2,3,4)',
    adminNameDe: 'Produktname DE',
    adminNameFr: 'Produktname FR',
    adminBundleContentDe: 'Inhalt / Beschreibung DE',
    adminBundleContentFr: 'Inhalt / Beschreibung FR',
    adminBundleLabelDe: 'Text zur Auswahl DE',
    adminBundleLabelFr: 'Text zur Auswahl FR',
    slotInfo: 'Inhalt',
    slotWeeklyChoice: 'Pro Woche',
    slotAddBundle: 'Abo hinzufügen',
    slotChooseOption: 'Option wählen',
    slotInfoTitle: 'Inhalt des Fresspäckli',
    close: 'Schliessen',
    menuMachine: 'Automat',
    menuIdea: 'Grundidee',
    menuContact: 'Kontakt',
    menuTerms: 'AGB',
    contactTitle: 'Kontakt',
    contactName: 'Name',
    contactSubject: 'Betreff',
    contactMessage: 'Nachricht',
    contactSend: 'Nachricht senden',
    contactSending: 'Wird gesendet …',
    contactSuccess: 'Nachricht wurde gesendet.',
    adminDesign: 'Design / Texte',
    adminDesignHint: 'Farben, Menüpunkte und Seiteninhalte verwalten',
    adminDesignSave: 'Design speichern',
    adminDesignSaved: 'Design wurde gespeichert.',
    adminMainTitle: 'Automat Titel',
    adminButtonColor: 'Button Farbe',
    adminSlotColor: 'Slot Farbe',
    adminFrameColor: 'Rahmen Farbe',
    adminBgColor: 'Hintergrund Farbe',
    adminCmsPro: 'CMS Pro',
    adminTitleDe: 'Titel DE',
    adminTitleFr: 'Titel FR',
    adminSloganDe: 'Slogan DE',
    adminSloganFr: 'Slogan FR',
    adminPagesTitle: 'Seiten / Menü',
    adminAddPage: 'Neue Seite erstellen',
    adminDeletePage: 'Seite löschen',
    adminShowMenu: 'Im Menü anzeigen',
    adminPageSlug: 'URL / Slug',
    adminPageSort: 'Reihenfolge',
    adminPageActive: 'Aktiv',
    adminMoveUp: 'Hoch',
    adminMoveDown: 'Runter',
    adminBigEditor: 'Grosser Inhaltseditor',
    adminPageHint: 'Hier erstellst du komplette Inhaltsseiten für Menü und Website.'
  },
  fr: {
    langTitle: 'Choisir la langue',
    smallTitle: 'AUTOMATE VIRTUEL POUR PAQUETS DU SOLDAT',
    introTitle: 'À vos marques, prêts, paquet du soldat',
    introCopy: 'Nous livrons ton ravitaillement à la caserne puis à ton domicile',
    toMachine: 'Vers l’automate',
    machineTitle: 'Automate ARMEEBOX',
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
    senderEmail: 'E-mail pour confirmation',
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
    sendingOrder: 'Envoi de la commande …',
    adminProductsSaving: 'Enregistrement des produits …',
    summary: 'Résumé de commande',
    subtotal: 'Sous-total',
    shipping: 'Envoi',
    total: 'Total',
    note: 'La commande est enregistrée, signalée à order@armeebox.ch et le client reçoit une confirmation par e-mail.',
    confirmTitle: 'Commande reçue avec succès',
    confirmCopy: 'Votre commande a été enregistrée. Le panier et le formulaire n’ont été vidés qu’après la commande finale.',
    confirmOrderNo: 'N° de commande',
    confirmEmail: 'Confirmation envoyée à',
    newOrder: 'Nouvelle commande',
    remove: 'Retirer',
    deliveryDetails: 'Détails de livraison',
    validationCart: 'Veuillez choisir au moins un produit.',
    validationGeneric: 'Veuillez remplir correctement tous les champs obligatoires.',
    validationEmail: 'Veuillez saisir une adresse e-mail valide.',
    validationPrivatePhone: 'Veuillez saisir un numéro de téléphone.',
    validationSoldierName: 'Veuillez saisir le prénom et le nom du soldat.',
    validationSender: 'Veuillez compléter les données expéditeur.',
    validationPrivateAddress: 'Veuillez compléter l’adresse privée.',
    submitError: 'La commande n’a pas pu être enregistrée. Veuillez réessayer.',
    orderSavedAdmin: 'La commande est prête pour la zone admin.',
    formErrorTitle: 'À vérifier',
    shippingMode: 'Mode d’envoi',
    orderDate: 'Commandé le',
    adminLogin: 'Connexion admin',
    adminEmail: 'E-mail admin',
    adminPassword: 'Mot de passe',
    adminOpen: 'Ouvrir admin',
    adminOrders: 'Commandes',
    adminLogout: 'Déconnexion',
    adminRefresh: 'Actualiser',
    adminNoOrders: 'Aucune commande disponible.',
    adminDetails: 'Détails de commande',
    adminStatus: 'Statut',
    adminSaveStatus: 'Enregistrer le statut',
    adminBackList: 'Retour à la liste',
    adminSearch: 'Recherche',
    adminSearchPlaceholder: 'N° de commande, e-mail ou nom',
    adminFilter: 'Filtre',
    adminFilterAll: 'Tous',
    adminFilterNew: 'Nouveau',
    adminFilterProgress: 'En cours',
    adminFilterDone: 'Terminé',
    adminNoResults: 'Aucune commande pour cette recherche / ce filtre.',
    adminShippingBarracks: 'Envoi caserne',
    adminShippingPrivate: 'Envoi privé',
    adminStatusNew: 'Nouveau',
    adminStatusInProgress: 'En cours',
    adminStatusDone: 'Terminé',
    adminListHint: 'Recherche, filtres et aperçu des statuts',
    adminOrderInfo: 'Infos commande',
    adminItems: 'Articles',
    adminDeliveryAddress: 'Adresse de livraison',
    adminSender: 'Expéditeur',
    adminContact: 'Contact',
    adminMessageMeta: 'Message / métadonnées',
    adminProducts: 'Produits / Slots',
    adminProductsHint: 'Gérer les produits, prix et emplacements',
    adminBackOrders: 'Retour aux commandes',
    adminProductsSave: 'Enregistrer les produits',
    adminProductsRefresh: 'Charger les produits',
    adminAddSlot: 'Ajouter un slot',
    adminDeleteSlot: 'Supprimer le slot',
    adminDragHint: 'Déplacer par glisser-déposer',
    adminProductsSaved: 'Les produits ont été enregistrés.',
    adminSlot: 'Slot',
    adminProductName: 'Nom du produit',
    adminPrice: 'Prix',
    adminActive: 'Actif',
    adminStockTotal: 'Stock total',
    adminStockCurrent: 'Stock actuel',
    adminStockMin: 'Stock minimum',
    adminStockStatus: 'Statut stock',
    stockOk: 'OK',
    stockLow: 'Faible',
    stockOut: 'Épuisé',
    adminImageUrl: 'URL image',
    adminImageUpload: 'Téléverser / déposer image ici',
    adminImageUploading: 'Téléversement de l’image …',
    adminImageUploaded: 'Image téléversée et enregistrée.',
    adminNoProducts: 'Aucun produit disponible.',
    adminCatalogLoadError: 'Impossible de charger les produits.',
    adminSlotType: 'Type de slot',
    adminSlotTypeNormal: 'Slot normal',
    adminSlotTypeBundle: 'Abonnement / paquet',
    adminBundleContent: 'Contenu / description',
    adminBundleOptions: 'Options par semaine (p. ex. 2,3,4)',
    adminNameDe: 'Nom du produit DE',
    adminNameFr: 'Nom du produit FR',
    adminBundleContentDe: 'Contenu / description DE',
    adminBundleContentFr: 'Contenu / description FR',
    adminBundleLabelDe: 'Texte du choix DE',
    adminBundleLabelFr: 'Texte du choix FR',
    slotInfo: 'Contenu',
    slotWeeklyChoice: 'Par semaine',
    slotAddBundle: 'Ajouter abonnement',
    slotChooseOption: 'Choisir',
    slotInfoTitle: 'Contenu du paquet',
    close: 'Fermer',
    menuMachine: 'Automate',
    menuIdea: 'Idée',
    menuContact: 'Contact',
    menuTerms: 'CGV',
    contactTitle: 'Contact',
    contactName: 'Nom',
    contactSubject: 'Sujet',
    contactMessage: 'Message',
    contactSend: 'Envoyer le message',
    contactSending: 'Envoi …',
    contactSuccess: 'Message envoyé.',
    adminDesign: 'Design / Textes',
    adminDesignHint: 'Gérer couleurs, menu et contenus',
    adminDesignSave: 'Enregistrer design',
    adminDesignSaved: 'Design enregistré.',
    adminMainTitle: 'Titre automate',
    adminButtonColor: 'Couleur bouton',
    adminSlotColor: 'Couleur slot',
    adminFrameColor: 'Couleur cadre',
    adminBgColor: 'Couleur fond',
    adminCmsPro: 'CMS Pro',
    adminTitleDe: 'Titre DE',
    adminTitleFr: 'Titre FR',
    adminSloganDe: 'Slogan DE',
    adminSloganFr: 'Slogan FR',
    adminPagesTitle: 'Pages / Menu',
    adminAddPage: 'Créer nouvelle page',
    adminDeletePage: 'Supprimer page',
    adminShowMenu: 'Afficher dans le menu',
    adminPageSlug: 'URL / Slug',
    adminPageSort: 'Ordre',
    adminPageActive: 'Actif',
    adminMoveUp: 'Haut',
    adminMoveDown: 'Bas',
    adminBigEditor: 'Grand éditeur',
    adminPageHint: 'Ici tu crées des pages complètes pour le menu et le site.'
  }
};

const ADMIN_STATUSES = ['new','in_progress','done'];

const STORAGE_KEY = 'armeebox_preview_state_v18';
const META_PREFIX = '__ARMBX_META__';
const state = {
  lang: 'de',
  route: 'language',
  cart: [],
  shipping: 'barracks',
  submitting: false,
  submitError: '',
  validationErrors: [],
  lastOrder: null,
  admin: {
    loading: false,
    loggedIn: false,
    loginError: '',
    orders: [],
    currentOrder: null,
    products: [],
    statusSaving: false,
    productsSaving: false,
    productsMessage: '',
    search: '',
    filter: 'all',
    design: null,
    pages: []
  },
  catalog: {
    loading: false,
    error: '',
    products: []
  },
  ui: {
    slotInfoProductId: null
  },
  bundleSelections: {},
  settings: {
    machineTitle: '',
    machineInner: '',
    machineTitle_de: '',
    machineTitle_fr: '',
    machineInner_de: '',
    machineInner_fr: '',
    buttonColor: '#65a832',
    slotColor: '#3d5366',
    frameColor: '#b22b2b',
    bgColor: '#061527'
  },
  pages: [],
  currentPageSlug: '',
  contact: { name:'', email:'', subject:'', message:'', sending:false, status:'', error:'' },
  form: {
    barracksIndex: 0,
    soldierFirstName: '',
    soldierLastName: '',
    soldierKp: '',
    soldierZug: '',
    senderName: '',
    senderStreet: '',
    senderZip: '',
    senderEmail: '',
    message: '',
    privateName: '',
    privateStreet: '',
    privateZip: '',
    privateEmail: '',
    privatePhone: ''
  }
};
const app = document.getElementById('app');

function money(n){
  const value = Number(n || 0);
  if(!Number.isFinite(value)) return 'Fr. 0.–';
  if(Math.abs(value - Math.round(value)) < 0.000001) return `Fr. ${Math.round(value)}.–`;
  return `Fr. ${value.toFixed(2)}`;
}
function t(k){ return texts[state.lang][k] ?? k; }
function escapeHtml(value){ return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function isEmail(value){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim()); }
function getCustomerEmail(){ return state.shipping === 'barracks' ? state.form.senderEmail.trim() : state.form.privateEmail.trim(); }
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function load(){ try{ const d=JSON.parse(localStorage.getItem(STORAGE_KEY)); if(d) Object.assign(state,d);}catch(e){} }
load();
function currentBarracks(){ return BARRACKS[state.form.barracksIndex] || BARRACKS[0]; }

function settingValue(key, fallback=''){
  const value = state.settings?.[key];
  return value === undefined || value === null || value === '' ? fallback : value;
}
function localizedSetting(baseKey, fallback=''){
  const direct = state.settings?.[`${baseKey}_${state.lang}`];
  const legacy = state.settings?.[baseKey];
  return direct === undefined || direct === null || direct === '' ? (legacy === undefined || legacy === null || legacy === '' ? fallback : legacy) : direct;
}
function pageIsActive(page){ return page?.is_active !== false && page?.active !== false; }
function pageInMenu(page){ return pageIsActive(page) && page?.show_in_menu !== false; }
function sortedPages(){ return [...(state.pages || [])].sort((a,b)=>Number(a.sort_order ?? 999)-Number(b.sort_order ?? 999) || String(a.slug||'').localeCompare(String(b.slug||''))); }
function topbar(){
  const pageButtons = sortedPages().filter(pageInMenu).map(p=>`<button data-nav-page="${escapeAttr(p.slug)}">${escapeHtml(pageTitle(p))}</button>`).join('');
  const menuLabel = state.lang === 'fr' ? 'Menu' : 'Menü';
  return `<div class="topbar"><img src="../public/logo.png" alt="ARMEEBOX"><div class="nav-dropdown"><button class="menu-toggle" id="mainMenuToggle" type="button">${menuLabel}</button><nav class="main-nav" id="mainNav"><button data-nav="shop">${t('menuMachine')}</button>${pageButtons}</nav></div></div>`;
}
function pageTitle(page){ return state.lang === 'fr' ? (page.title_fr || page.title_de || page.slug) : (page.title_de || page.title_fr || page.slug); }
function pageContent(page){ return state.lang === 'fr' ? (page.content_fr || page.content_de || '') : (page.content_de || page.content_fr || ''); }
async function loadSiteContent(){
  try{
    const response = await fetch('/.netlify/functions/catalog-api?action=site', {credentials:'same-origin'});
    const data = await response.json().catch(()=>({}));
    if(data?.success){
      if(data.settings) state.settings = {...state.settings, ...data.settings};
      if(Array.isArray(data.pages)) state.pages = data.pages;
    }
  }catch(_){ }
}
function findSitePage(slug){ return (state.pages || []).find(p => p.slug === slug) || null; }

function localizedAdminValue(value, fallback=''){
  if(value && typeof value === 'object') return String(value[state.lang] || value.de || value.fr || fallback || '');
  return String(value ?? fallback ?? '');
}

function parseBundleMeta(row){
  const directOptions = Array.isArray(row?.quantity_options)
    ? row.quantity_options.map((value)=>Number(value)).filter((value)=>Number.isFinite(value) && value > 0)
    : [];
  const base = {
    slot_type: row?.slot_type === 'bundle' ? 'bundle' : 'normal',
    content_de: localizedAdminValue(row?.bundle_content_de ?? row?.bundle_content ?? row?.description_de ?? '', row?.description_de ?? ''),
    content_fr: localizedAdminValue(row?.bundle_content_fr ?? '', ''),
    option_label_de: localizedAdminValue(row?.option_label_de ?? '', ''),
    option_label_fr: localizedAdminValue(row?.option_label_fr ?? '', ''),
    quantity_options: directOptions.length ? directOptions : [2,3,4]
  };
  const raw = String(row?.description_fr || '');
  if(raw.startsWith(META_PREFIX)){
    try{
      const meta = JSON.parse(raw.slice(META_PREFIX.length));
      const options = Array.isArray(meta?.quantity_options) ? meta.quantity_options.map((value)=>Number(value)).filter((value)=>Number.isFinite(value) && value > 0) : base.quantity_options;
      return {
        slot_type: row?.slot_type === 'bundle' || meta?.slot_type === 'bundle' ? 'bundle' : 'normal',
        content_de: localizedAdminValue(row?.bundle_content_de ?? row?.bundle_content ?? meta?.content_de ?? meta?.content ?? base.content_de ?? '', base.content_de ?? ''),
        content_fr: localizedAdminValue(row?.bundle_content_fr ?? meta?.content_fr ?? base.content_fr ?? '', base.content_fr ?? ''),
        option_label_de: localizedAdminValue(row?.option_label_de ?? meta?.option_label_de ?? base.option_label_de ?? '', base.option_label_de ?? ''),
        option_label_fr: localizedAdminValue(row?.option_label_fr ?? meta?.option_label_fr ?? base.option_label_fr ?? '', base.option_label_fr ?? ''),
        quantity_options: directOptions.length ? directOptions : (options.length ? options : base.quantity_options)
      };
    }catch(_){ }
  }
  return base;
}
function encodeBundleMeta(product){
  return `${META_PREFIX}${JSON.stringify({
    slot_type: product.slot_type === 'bundle' ? 'bundle' : 'normal',
    content_de: String(product.bundle_content?.de || product.bundle_content || ''),
    content_fr: String(product.bundle_content?.fr || ''),
    option_label_de: String(product.option_label?.de || ''),
    option_label_fr: String(product.option_label?.fr || ''),
    quantity_options: (Array.isArray(product.quantity_options) ? product.quantity_options : []).map((value)=>Number(value)).filter((value)=>Number.isFinite(value) && value > 0)
  })}`;
}
function localizedBundleContent(product){
  if(!product) return '';
  const value = product.bundle_content;
  if(value && typeof value === 'object') return String(value[state.lang] || value.de || value.fr || '');
  return String(value || '');
}
function localizedBundleLabel(product){
  if(!product) return t('slotWeeklyChoice');
  const value = product.option_label;
  if(value && typeof value === 'object'){
    const direct = String(value[state.lang] || value.de || value.fr || '').trim();
    if(direct) return direct;
  }
  return t('slotWeeklyChoice');
}

function bundleOptionsFromInput(value){
  const options = String(value || '')
    .split(/[;,|\s]+/)
    .map((part)=>Number(part.trim().replace(/x/gi,'')))
    .filter((num, index, arr)=>Number.isFinite(num) && num > 0 && arr.indexOf(num) === index);
  return options.length ? options : [2,3,4];
}
function ensureBundleSelection(product){
  if(product?.slot_type !== 'bundle') return null;
  const options = Array.isArray(product.quantity_options) && product.quantity_options.length ? product.quantity_options : [2,3,4];
  const current = Number(state.bundleSelections?.[product.id]);
  const next = options.includes(current) ? current : options[0];
  state.bundleSelections[product.id] = next;
  return next;
}
function selectedBundleMultiplier(product){
  if(product?.slot_type !== 'bundle') return 1;
  return ensureBundleSelection(product) || 1;
}
function displayPrice(product){
  const base = Number(product?.price || 0);
  if(product?.slot_type === 'bundle') return base * selectedBundleMultiplier(product);
  return base;
}

function stockValue(value, fallback = 0){
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : fallback;
}
function productStock(product){
  return {
    total: stockValue(product?.stock_total, 0),
    current: stockValue(product?.stock_current ?? product?.stock_total, 0),
    min: stockValue(product?.stock_min, 0)
  };
}
function isSoldOut(product){
  const stock = productStock(product);
  return stock.current <= 0;
}
function isLowStock(product){
  const stock = productStock(product);
  return stock.current > 0 && stock.min > 0 && stock.current <= stock.min;
}
function stockStatusClass(product){
  if(isSoldOut(product)) return 'stock-out';
  if(isLowStock(product)) return 'stock-low';
  return 'stock-ok';
}
function stockStatusText(product){
  if(isSoldOut(product)) return t('stockOut');
  if(isLowStock(product)) return t('stockLow');
  return t('stockOk');
}
function cartEntryProductId(entry){
  if(entry && typeof entry === 'object') return entry.productId ?? entry.id ?? '';
  return entry;
}
function cartEntryKey(entry){
  if(entry && typeof entry === 'object') return `${entry.productId || entry.id}::${entry.kind || 'normal'}::${entry.multiplier || 1}`;
  return String(entry);
}
function cartEntryMultiplier(entry){
  if(entry && typeof entry === 'object') return Number(entry.multiplier || 1);
  return 1;
}
function cartEntryKind(entry){
  if(entry && typeof entry === 'object') return entry.kind || 'normal';
  return 'normal';
}
function openSlotInfo(productId){ state.ui.slotInfoProductId = String(productId); save(); render(); }
function closeSlotInfo(){ state.ui.slotInfoProductId = null; save(); render(); }
function addBundleProduct(productId){
  const product = currentProducts().find((item)=>String(item.id)===String(productId));
  if(!product || isSoldOut(product)) return;
  const multiplier = selectedBundleMultiplier(product);
  state.cart.push({ productId: String(product.id), kind: 'bundle', multiplier });
  save(); render();
}
function setBundleOption(productId, value){
  const product = currentProducts().find((item)=>String(item.id)===String(productId));
  if(!product || product.slot_type !== 'bundle') return;
  const options = Array.isArray(product.quantity_options) && product.quantity_options.length ? product.quantity_options : [2,3,4];
  const next = Number(value);
  state.bundleSelections[product.id] = options.includes(next) ? next : options[0];
  save(); render();
}

function normalizeCatalogProduct(row, index){
  const fallback = DEFAULT_PRODUCTS[index] || {};
  const slotNumber = Number(row?.slot ?? fallback.slot ?? (index + 1));
  const fallbackNameDe = fallback.name?.de || `Slot ${String(slotNumber).padStart(2,'0')}`;
  const fallbackNameFr = fallback.name?.fr || fallbackNameDe;
  const rawName = row?.name;
  const legacyNameDe = rawName && typeof rawName === 'object' ? (rawName.de || rawName.fr || '') : rawName;
  const nameDe = String(row?.name_de || legacyNameDe || fallbackNameDe);
  const nameFr = String(row?.name_fr || row?.name_de || legacyNameDe || fallbackNameFr);
  const priceChf = Number(row?.price_chf);
  const legacyPrice = Number(row?.price);
  const fallbackPrice = Number(fallback.price ?? 0);
  const price = (Number.isFinite(priceChf) && priceChf > 0)
    ? priceChf
    : (Number.isFinite(legacyPrice) && legacyPrice > 0)
      ? legacyPrice
      : (Number.isFinite(priceChf) ? priceChf : (Number.isFinite(legacyPrice) ? legacyPrice : fallbackPrice));
  const meta = parseBundleMeta(row);
  return {
    id: String(row?.id ?? row?.slot ?? fallback.id ?? slotNumber),
    slot: String(slotNumber).padStart(2,'0'),
    slotNumber,
    name: { de: nameDe, fr: nameFr },
    price,
    active: Boolean(row?.is_active ?? row?.active ?? true),
    image_url: row?.image_url || '',
    sort_order: Number(row?.sort_order ?? 0),
    stock_total: stockValue(row?.stock_total ?? row?.initial_stock ?? 0, 0),
    stock_current: stockValue(row?.stock_current ?? row?.current_stock ?? row?.stock_total ?? row?.initial_stock ?? 0, 0),
    stock_min: stockValue(row?.stock_min ?? row?.minimum_stock ?? 0, 0),
    slot_type: meta.slot_type,
    bundle_content: { de: meta.content_de, fr: meta.content_fr || meta.content_de },
    option_label: { de: meta.option_label_de, fr: meta.option_label_fr || meta.option_label_de },
    quantity_options: meta.quantity_options
  };
}
function currentProducts(){
  const source = Array.isArray(state.catalog.products) && state.catalog.products.length ? state.catalog.products : DEFAULT_PRODUCTS;
  return source.map((row, index) => normalizeCatalogProduct(row, index)).filter(product => product.active !== false).sort((a,b)=>a.slotNumber-b.slotNumber);
}
function adminProductsList(){
  const source = Array.isArray(state.admin.products) && state.admin.products.length ? state.admin.products : (Array.isArray(state.catalog.products) && state.catalog.products.length ? state.catalog.products : DEFAULT_PRODUCTS);
  return source.map((row, index) => normalizeCatalogProduct(row, index)).sort((a,b)=>a.slotNumber-b.slotNumber);
}
function reindexAdminProducts(products){
  return products.map((product, index) => ({
    ...product,
    slotNumber: index + 1,
    slot: String(index + 1).padStart(2, '0')
  }));
}
function moveAdminSlot(fromIndex, toIndex){
  const products = adminProductsList();
  if(fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= products.length || toIndex >= products.length) return;
  const [moved] = products.splice(fromIndex, 1);
  products.splice(toIndex, 0, moved);
  state.admin.products = reindexAdminProducts(products);
  state.admin.productsMessage = '';
  save();
  render();
}
function deleteAdminSlot(index){
  const products = adminProductsList();
  if(index < 0 || index >= products.length) return;
  products.splice(index, 1);
  state.admin.products = reindexAdminProducts(products);
  state.admin.productsMessage = '';
  save();
  render();
}
function addAdminSlot(){
  const products = adminProductsList();
  const used = new Set(products.map(product => Number(product.slotNumber)).filter(Number.isFinite));
  let nextSlot = 1;
  while(used.has(nextSlot)) nextSlot++;
  products.push({
    id: `new-${nextSlot}-${Date.now()}`,
    slot: String(nextSlot).padStart(2,'0'),
    slotNumber: nextSlot,
    name: { de: `Slot ${String(nextSlot).padStart(2,'0')}`, fr: `Slot ${String(nextSlot).padStart(2,'0')}` },
    price: 0,
    active: true,
    image_url: '',
    sort_order: 0,
    slot_type: 'normal',
    bundle_content: { de: '', fr: '' },
    option_label: { de: '', fr: '' },
    quantity_options: [2,3,4]
  });
  state.admin.products = products.sort((a,b)=>a.slotNumber-b.slotNumber);
  state.admin.productsMessage = '';
  save();
  render();
  requestAnimationFrame(() => {
    const input = document.querySelector(`[data-product-index=\"${state.admin.products.length - 1}\"][data-product-field=\"name\"]`);
    if(input) input.focus();
  });
}

function formatDate(value){
  if(!value) return '-';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleString(state.lang === 'fr' ? 'fr-CH' : 'de-CH');
}
function adminStatusLabel(value){
  if(value==='in_progress') return 'in_progress';
  if(value==='done') return 'done';
  return 'new';
}
function adminStatusText(value){
  const status = adminStatusLabel(value);
  if(status==='in_progress') return t('adminStatusInProgress');
  if(status==='done') return t('adminStatusDone');
  return t('adminStatusNew');
}
function shippingMethodText(value){
  return value === 'private' ? t('adminShippingPrivate') : t('adminShippingBarracks');
}

function orderItemTotal(item){
  const total = Number(item?.total_price ?? item?.total_price_chf ?? item?.line_total_chf);
  if(Number.isFinite(total) && total > 0) return total;
  const unit = Number(item?.unit_price ?? item?.unit_price_chf ?? 0);
  const qty = Number(item?.quantity ?? 1);
  return unit * qty;
}
function cleanLines(lines){
  return (Array.isArray(lines) ? lines : []).map(line => String(line || '').trim()).filter(Boolean);
}
function deliveryNoteHtml(order){
  const meta = order?.order_meta || {};
  const items = Array.isArray(order?.items) ? order.items : [];
  const barracksLines = cleanLines(meta.barracksAddress);
  const isPrivate = order?.shipping_method === 'private';
  const date = formatDate(order?.created_at);
  const itemRows = items.map(item => `
    <tr>
      <td>${escapeHtml(item.product_name || '-')}</td>
      <td>${escapeHtml(item.quantity || 1)}</td>
      <td>${money(orderItemTotal(item))}</td>
    </tr>`).join('');
  const deliveryBlock = isPrivate ? `
    <p><strong>Lieferadresse Privat</strong><br>
    ${escapeHtml(meta.privateName || '')}<br>
    ${escapeHtml(meta.privateStreet || '')}<br>
    ${escapeHtml(meta.privateZip || '')}${meta.privateCity ? ' ' + escapeHtml(meta.privateCity) : ''}<br>
    ${escapeHtml(meta.privateEmail || '')}<br>
    ${escapeHtml(meta.privatePhone || '')}</p>` : `
    <p><strong>Lieferadresse Soldat</strong><br>
    ${escapeHtml(meta.soldierFirstName || '')} ${escapeHtml(meta.soldierLastName || '')}<br>
    ${escapeHtml(meta.soldierKp ? `Kp: ${meta.soldierKp}` : '')}${meta.soldierKp && meta.soldierZug ? ' / ' : ''}${escapeHtml(meta.soldierZug ? `Zug: ${meta.soldierZug}` : '')}<br>
    ${barracksLines.map(escapeHtml).join('<br>')}</p>`;
  const senderBlock = isPrivate ? `
    <p><strong>Kontakt</strong><br>${escapeHtml(order?.customer_email || '')}</p>` : `
    <p><strong>Absender</strong><br>
    ${escapeHtml(meta.senderName || '')}<br>
    ${escapeHtml(meta.senderStreet || '')}<br>
    ${escapeHtml(meta.senderZip || '')}<br>
    ${escapeHtml(meta.senderEmail || '')}</p>`;
  return `<!doctype html><html><head><meta charset="utf-8"><title>Lieferschein ${escapeHtml(order?.order_number || '')}</title>
    <style>
      body{font-family:Arial,Helvetica,sans-serif;color:#111;margin:34px;line-height:1.35}
      .head{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #111;padding-bottom:16px;margin-bottom:22px}
      h1{font-size:30px;margin:0 0 6px}.muted{color:#555}.grid{display:grid;grid-template-columns:1fr 1fr;gap:26px;margin:18px 0}
      table{width:100%;border-collapse:collapse;margin-top:16px}th,td{border-bottom:1px solid #ccc;text-align:left;padding:9px 6px}th{border-bottom:2px solid #111}
      .total{margin-top:16px;text-align:right;font-size:18px}.msg{border:1px solid #ccc;padding:14px;margin-top:18px;min-height:60px;white-space:pre-wrap}
      @media print{button{display:none}body{margin:20mm}}
    </style></head><body>
    <button onclick="window.print()" style="float:right;padding:10px 14px">Drucken</button>
    <div class="head"><div><h1>ARMEEBOX Lieferschein</h1><div class="muted">Bestellnummer: ${escapeHtml(order?.order_number || '-')}</div></div><div><strong>Bestellt am</strong><br>${escapeHtml(date)}</div></div>
    <div class="grid"><div>${deliveryBlock}</div><div>${senderBlock}</div></div>
    <h2>Artikel</h2><table><thead><tr><th>Produkt</th><th>Menge</th><th>Betrag</th></tr></thead><tbody>${itemRows}</tbody></table>
    <div class="total"><strong>Total: ${money(order?.total ?? order?.total_chf ?? 0)}</strong></div>
    <h2>Nachricht an den Soldaten</h2><div class="msg">${escapeHtml(meta.message || '-')}</div>
    </body></html>`;
}
function printDeliveryNote(){
  const order = state.admin.currentOrder;
  if(!order) return;
  const win = window.open('', '_blank', 'width=900,height=900');
  if(!win) return alert('Popup wurde blockiert. Bitte Popups für ARMEEBOX erlauben.');
  win.document.open();
  win.document.write(deliveryNoteHtml(order));
  win.document.close();
  win.focus();
}
function filteredAdminOrders(){
  const search = String(state.admin.search || '').trim().toLowerCase();
  const filter = state.admin.filter || 'all';
  return (state.admin.orders || []).filter(order => {
    const status = adminStatusLabel(order.order_status || order.status);
    if(filter !== 'all' && status !== filter) return false;
    if(!search) return true;
    const meta = order.order_meta || {};
    const haystack = [
      order.order_number,
      order.customer_email,
      order.recipient_name,
      order.barracks_label,
      meta.soldierFirstName,
      meta.soldierLastName,
      meta.senderName,
      meta.privateName
    ].filter(Boolean).join(' ').toLowerCase();
    return haystack.includes(search);
  });
}
function escapeAttr(value){ return escapeHtml(value).replace(/"/g,'&quot;'); }
async function adminRequest(action, options={}){
  const method = options.method || 'GET';
  const body = options.body;
  const params = new URLSearchParams();
  params.set('action', action);
  if (options.id) params.set('id', options.id);
  const response = await fetch(`/.netlify/functions/admin-api?${params.toString()}`, {
    method,
    headers: body ? {'Content-Type':'application/json'} : undefined,
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'same-origin'
  });
  const data = await response.json().catch(()=>({}));
  if(!response.ok || data.success===false){
    throw new Error(data.error || 'Admin request failed');
  }
  return data;
}
async function refreshAdminSession(){
  try{
    const data = await adminRequest('session');
    state.admin.loggedIn = !!data.loggedIn;
    if(!data.loggedIn){
      state.admin.orders = [];
      state.admin.currentOrder = null;
    }
  }catch(_){
    state.admin.loggedIn = false;
  }
}
async function loadAdminOrders(){
  state.admin.loading = true;
  state.admin.loginError = '';
  render();
  try{
    const data = await adminRequest('orders');
    state.admin.orders = Array.isArray(data.orders) ? data.orders : [];
  }catch(error){
    state.admin.loginError = error.message || 'Admin load failed';
  }finally{
    state.admin.loading = false;
    save();
    render();
  }
}
async function loadAdminOrder(id){
  state.admin.loading = true;
  state.admin.loginError = '';
  render();
  try{
    const data = await adminRequest('order', {id});
    state.admin.currentOrder = data.order || null;
  }catch(error){
    state.admin.loginError = error.message || 'Order load failed';
  }finally{
    state.admin.loading = false;
    save();
    render();
  }
}
async function doAdminLogin(email, password){
  state.admin.loading = true;
  state.admin.loginError = '';
  render();
  try{
    const data = await adminRequest('login', {method:'POST', body:{email, password}});
    state.admin.loggedIn = !!data.loggedIn;
    if(state.admin.loggedIn){
      state.route = 'admin-orders';
      await loadAdminOrders();
      return;
    }
  }catch(error){
    state.admin.loginError = error.message || 'Login failed';
  }finally{
    state.admin.loading = false;
    save();
    render();
  }
}
async function doAdminLogout(){
  try{ await adminRequest('logout', {method:'POST'}); }catch(_){ }
  state.admin.loggedIn = false;
  state.admin.orders = [];
  state.admin.currentOrder = null;
  state.route = 'admin-login';
  save();
  render();
}
async function saveAdminStatus(orderId, status){
  state.admin.statusSaving = true;
  state.admin.loginError = '';
  render();
  try{
    const data = await adminRequest('status', {method:'POST', body:{id: orderId, status}});
    state.admin.currentOrder = data.order || state.admin.currentOrder;
    state.admin.orders = state.admin.orders.map(o => o.id === orderId ? {...o, status, order_status: status} : o);
  }catch(error){
    state.admin.loginError = error.message || 'Status save failed';
  }finally{
    state.admin.statusSaving = false;
    save();
    render();
  }
}
async function loadCatalogProducts(){
  state.catalog.loading = true;
  state.catalog.error = '';
  try{
    const response = await fetch('/.netlify/functions/catalog-api?action=products', { credentials:'same-origin' });
    const data = await response.json().catch(()=>({}));
    if(response.ok && data.success !== false && Array.isArray(data.products) && data.products.length){
      state.catalog.products = data.products;
      state.bundleSelections = {};
      state.catalog.products.forEach((product)=>{
        if(product?.slot_type === 'bundle'){
          const options = Array.isArray(product.quantity_options) && product.quantity_options.length ? product.quantity_options : [2,3,4];
          state.bundleSelections[product.id] = Number(options[0]) || 1;
        }
      });
    }
  }catch(error){
    state.catalog.error = error?.message || '';
  }finally{
    state.catalog.loading = false;
    save();
    render();
  }
}

async function loadAdminDesign(){
  state.admin.loading = true; state.admin.loginError=''; render();
  try{
    const data = await adminRequest('design');
    state.admin.design = data.settings || {...state.settings};
    state.admin.pages = Array.isArray(data.pages) ? data.pages : (state.pages || []);
  }catch(error){ state.admin.loginError = error.message || 'Design konnte nicht geladen werden'; }
  finally{ state.admin.loading=false; save(); render(); }
}
async function saveAdminDesign(){
  state.admin.loading = true; state.admin.loginError=''; state.admin.productsMessage=''; render();
  try{
    const data = await adminRequest('design', {method:'POST', body:{settings: state.admin.design || {}, pages: state.admin.pages || []}});
    state.settings = {...state.settings, ...(data.settings || state.admin.design || {})};
    state.pages = Array.isArray(data.pages) ? data.pages : (state.admin.pages || []);
    state.admin.productsMessage = t('adminDesignSaved');
  }catch(error){ state.admin.loginError = error.message || 'Design konnte nicht gespeichert werden'; }
  finally{ state.admin.loading=false; save(); render(); }
}
async function loadAdminProducts(){
  state.admin.loading = true;
  state.admin.loginError = '';
  state.admin.productsMessage = '';
  render();
  try{
    const data = await adminRequest('products');
    state.admin.products = Array.isArray(data.products) && data.products.length ? data.products : currentProducts();
  }catch(error){
    state.admin.loginError = error.message || t('adminCatalogLoadError');
  }finally{
    state.admin.loading = false;
    save();
    render();
  }
}
async function uploadAdminProductImage(index, file){
  if(!file) return;
  const products = adminProductsList();
  const product = products[index];
  if(!product) return;
  const allowed = ['image/jpeg','image/png','image/webp','image/gif'];
  if(file.type && !allowed.includes(file.type)){
    state.admin.loginError = 'Nur JPG, PNG, WebP oder GIF erlaubt';
    save(); render();
    return;
  }
  if(file.size && file.size > 8 * 1024 * 1024){
    state.admin.loginError = 'Bild ist zu gross. Maximum 8 MB.';
    save(); render();
    return;
  }
  state.admin.loginError = '';
  state.admin.productsMessage = t('adminImageUploading');
  save(); render();
  try{
    const form = new FormData();
    form.append('file', file);
    form.append('slot', product.slot || product.slotNumber || index + 1);
    const response = await fetch('/.netlify/functions/upload-product-image', {
      method: 'POST',
      body: form,
      credentials: 'same-origin'
    });
    const data = await response.json().catch(()=>({}));
    if(!response.ok || data.success === false || !data.publicUrl){
      throw new Error(data.error || 'Upload fehlgeschlagen');
    }
    const fresh = adminProductsList();
    if(fresh[index]) fresh[index].image_url = data.publicUrl;
    state.admin.products = fresh;
    state.admin.productsMessage = t('adminImageUploaded');
    save();
    await saveAdminProducts();
  }catch(error){
    state.admin.loginError = error.message || 'Upload fehlgeschlagen';
    save(); render();
  }
}

async function saveAdminProducts(){
  state.admin.productsSaving = true;
  state.admin.loginError = '';
  state.admin.productsMessage = '';
  render();
  try{
    const list = adminProductsList();
    const usedSlots = new Set();
    for (const product of list){
      const slotNumber = Number(product.slotNumber);
      if(!Number.isInteger(slotNumber) || slotNumber < 1){
        throw new Error('Ungültige Slotnummer');
      }
      if(usedSlots.has(slotNumber)){
        throw new Error('Slotnummern müssen eindeutig sein');
      }
      usedSlots.add(slotNumber);
    }
    const rows = list.map(product => ({
      slot: Number(product.slotNumber),
      name_de: product.name?.de || '',
      name_fr: product.name?.fr || product.name?.de || '',
      price_chf: Number(product.price || 0),
      is_active: product.active !== false,
      image_url: product.image_url || '',
      sort_order: Number(product.sort_order || 0),
      stock_total: stockValue(product.stock_total, 0),
      stock_current: stockValue(product.stock_current, 0),
      stock_min: stockValue(product.stock_min, 0),
      slot_type: product.slot_type === 'bundle' ? 'bundle' : 'normal',
      bundle_content_de: product.bundle_content?.de || '',
      bundle_content_fr: product.bundle_content?.fr || '',
      option_label_de: product.option_label?.de || '',
      option_label_fr: product.option_label?.fr || '',
      quantity_options: Array.isArray(product.quantity_options) ? product.quantity_options : []
    }));
    const data = await adminRequest('products', { method:'POST', body:{ products: rows } });
    const products = Array.isArray(data.products) ? data.products : rows;
    state.admin.products = products;
    state.catalog.products = products;
    state.admin.productsMessage = t('adminProductsSaved');
  }catch(error){
    state.admin.loginError = error.message || t('adminCatalogLoadError');
  }finally{
    state.admin.productsSaving = false;
    save();
    render();
  }
}
function cartItemsDetailed(){
  const products = currentProducts();
  return state.cart.map((entry)=>{
    const product = products.find((item)=>String(item.id)===String(cartEntryProductId(entry)));
    if(!product) return null;
    const kind = cartEntryKind(entry);
    const multiplier = cartEntryMultiplier(entry);
    const effectivePrice = kind === 'bundle' ? Number(product.price || 0) * multiplier : Number(product.price || 0);
    return {
      ...product,
      kind,
      multiplier,
      price: effectivePrice,
      cartKey: cartEntryKey(entry),
      qtyLabel: kind === 'bundle' ? localizedBundleLabel(product) : ''
    };
  }).filter(Boolean);
}
function cartGrouped(){
  const map = new Map();
  for (const p of cartItemsDetailed()){
    const key = `${p.id}::${p.kind || 'normal'}::${p.multiplier || 1}`;
    if(!map.has(key)) map.set(key,{...p, qty:0, groupKey:key});
    map.get(key).qty++;
  }
  return [...map.values()];
}
function subtotal(){ return cartItemsDetailed().reduce((a,p)=>a+Number(p.price || 0),0); }
function shippingCost(){ return state.shipping==='private' ? 9 : 0; }
function total(){ return subtotal()+shippingCost(); }
function setRoute(route){ state.route=route; state.submitError=''; save(); render(); }
function updateHash(){
  const map={language:'#language',intro:'#intro',shop:'#shop',order:'#order',review:'#review',confirmation:'#confirmation','admin-login':'#admin-login','admin-orders':'#admin-orders','admin-order':'#admin-order','admin-products':'#admin-products','admin-design':'#admin-design',page:'#page'};
  if(state.route==='admin-order'){
    const id = state.admin.currentOrder?.id || new URLSearchParams(location.search).get('id') || '';
    const target = `#admin-order${id ? `?id=${encodeURIComponent(id)}` : ''}`;
    if(`${location.hash}`!==target) history.replaceState(null,'',target);
    return;
  }
  if(state.route==='page'){ const target = `#${state.currentPageSlug || 'grundidee'}`; if(location.hash!==target) history.replaceState(null,'',target); return; }
  if(location.hash!==map[state.route]) history.replaceState(null,'',map[state.route]);
}
function resetOrderData(){
  state.cart = [];
  state.shipping = 'barracks';
  state.submitError = '';
  state.validationErrors = [];
  state.form = {
    barracksIndex: 0,
    soldierFirstName: '',
    soldierLastName: '',
    soldierKp: '',
    soldierZug: '',
    senderName: '',
    senderStreet: '',
    senderZip: '',
    senderEmail: '',
    message: '',
    privateName: '',
    privateStreet: '',
    privateZip: '',
    privateEmail: '',
    privatePhone: ''
  };
}
window.addEventListener('hashchange',()=>{
  const h=location.hash.replace('#','').split('?')[0];
  if(['language','intro','shop','order','review','confirmation','admin-login','admin-orders','admin-order','admin-products','admin-design','page'].includes(h)){
    state.route=h;
    if(h==='admin-order'){
      const id = new URLSearchParams(location.search).get('id');
      if(id) loadAdminOrder(id);
    }
    render();
  }
});
function onSelectProduct(id){ const product = currentProducts().find((item)=>String(item.id)===String(id)); if(!product || isSoldOut(product)) return; if(product.slot_type==='bundle'){ addBundleProduct(id); return; } state.cart.push(id); save(); render(); }
function removeOne(id){
  const key = String(id);
  const parts = key.split('::');
  const targetProductId = parts[0] || key;
  const targetKind = parts[1] || 'normal';
  const targetMultiplier = String(parts[2] || '1');
  const idx = state.cart.findIndex((entry)=>{
    if(cartEntryKey(entry)===key) return true;
    return String(cartEntryProductId(entry))===targetProductId
      && cartEntryKind(entry)===targetKind
      && String(cartEntryMultiplier(entry))===targetMultiplier;
  });
  if(idx>-1) state.cart.splice(idx,1);
  save();
  render();
}

function renderAlerts(){
  const items = [...state.validationErrors];
  if(state.submitError) items.push(state.submitError);
  if(!items.length) return '';
  return `<div class="alert error"><strong>${t('formErrorTitle')}</strong><ul>${items.map(msg=>`<li>${escapeHtml(msg)}</li>`).join('')}</ul></div>`;
}

function renderLanguage(){
  return `
  <div class="page hero-box">
    <div class="hero-card language-card">
      <img class="hero-logo" src="../public/logo.png" alt="ARMEEBOX">
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
      <img class="hero-logo" src="../public/logo.png" alt="ARMEEBOX">
      <h1 class="hero-title">${t('introTitle')}</h1>
      <p class="hero-copy">${t('introCopy')}</p>
      <div class="hero-actions"><button class="cta primary" id="toShopBtn">${t('toMachine')}</button></div>
    </div>
  </div>`;
}


function renderSlotInfoModal(){
  const product = currentProducts().find((item)=>String(item.id)===String(state.ui.slotInfoProductId || ''));
  if(!product || !state.ui.slotInfoProductId) return '';
  return `
    <div class="modal-backdrop" id="slotInfoBackdrop">
      <div class="modal-card">
        <div class="modal-head"><h3>${t('slotInfoTitle')}</h3><button class="back-btn" id="closeSlotInfoBtn">${t('close')}</button></div>
        <div class="modal-title">${escapeHtml(product.name[state.lang])}</div>
        <div class="modal-content">${escapeHtml(localizedBundleContent(product)).replace(/\n/g,'<br>')}</div>
      </div>
    </div>`;
}

function renderMachine(){
  const grouped=cartGrouped();
  return `
  ${topbar()}
  <div class="page">
    <div class="shell" style="--admin-bg:${escapeAttr(settingValue('bgColor', '#061527'))};--admin-frame:${escapeAttr(settingValue('frameColor', '#b22b2b'))};--admin-slot:${escapeAttr(settingValue('slotColor', '#3d5366'))};--admin-button:${escapeAttr(settingValue('buttonColor', '#65a832'))}">
      <div class="header-row"><h1>${escapeHtml(localizedSetting('machineTitle', t('machineTitle')))}</h1></div>
      <div class="machine"><div class="machine-red"><div class="machine-inner">
        <div class="machine-banner">${escapeHtml(localizedSetting('machineInner', t('machineInner')))}</div>
        <div><div class="grid">
          ${currentProducts().map(p=>{
            const isBundle = p.slot_type === 'bundle';
            const currentMultiplier = isBundle ? selectedBundleMultiplier(p) : 1;
            const displayName = p.name[state.lang];
            const displayPriceValue = displayPrice(p);
            return `
          <div class="slot ${isBundle ? 'slot-bundle' : ''} ${isSoldOut(p) ? 'is-sold-out' : ''}" data-id="${p.id}" role="button" tabindex="0" aria-label="${escapeAttr(displayName)}">
            ${isSoldOut(p) ? `<div class="soldout-ribbon">${t('stockOut')}</div>` : ''}
            <div class="slot-top">
              <div class="slot-image-frame">
                ${p.image_url ? `<img class="slot-product-img" src="${escapeAttr(p.image_url)}" alt="${escapeAttr(displayName)}" loading="lazy">` : `<div class="img-placeholder">SPÄTER BILD</div>`}
              </div>
              <div class="spirals">◜◜◜</div>
            </div>
            <div class="price">${money(displayPriceValue)}</div>
            <div class="stock-mini ${stockStatusClass(p)}">${stockStatusText(p)} · ${productStock(p).current}</div>
            <div class="namebar ${isBundle ? 'namebar-bundle' : ''}" title="${escapeAttr(displayName)}">
              ${isBundle ? `<button class="slot-mini-btn slot-info-btn" type="button" data-slot-info="${p.id}" aria-label="${t('slotInfo')}">
                <span class="slot-info-icon">i</span>
              </button>` : ''}
              <span class="namebar-text">${displayName}</span>
            </div>
            <div class="select-light ${isBundle ? 'select-light-bundle' : ''}">
              ${isBundle ? `<select class="slot-bundle-select" data-slot-option-select="${p.id}" aria-label="${t('slotChooseOption')}">
                ${(Array.isArray(p.quantity_options)&&p.quantity_options.length?p.quantity_options:[2,3,4]).map((opt)=>`<option value="${opt}" ${Number(opt)===Number(currentMultiplier)?'selected':''}>${opt}x</option>`).join('')}
              </select>` : '<span></span>'}
            </div>
          </div>`;
          }).join('')}
        </div></div>
        <aside class="side">
          <div class="led">
            <div class="line"><span class="currency">Fr.</span><span class="amount">${total()}</span></div>
            <div class="line"><span class="small">${t('total')}:</span><span class="small">${state.cart.length}</span></div>
          </div>
          <div class="cartbox cartbox-compact">
            <h3>${t('cart')}</h3>
            <div class="cart-list">
              ${grouped.length ? grouped.map(item=>`
              <div class="cart-item">
                <div><strong>${item.name[state.lang]}</strong>${item.kind==='bundle' ? `<div class="cart-subnote">${item.multiplier}x${item.qtyLabel ? ` / ${item.qtyLabel}` : ''}</div>` : ''}<div>x${item.qty}</div></div>
                <div>${money(item.price*item.qty)}</div>
                <button class="remove-btn" data-remove="${item.groupKey}" aria-label="${t('remove')}">×</button>
              </div>`).join('') : `<div class="note">${t('empty')}</div>`}
            </div>
            <button class="order-btn order-btn-inline" id="goOrderBtn">${t('order')}</button>
          </div>
          <div class="dots"><span class="dot"></span><span class="dot green"></span></div>
        </aside>
      </div></div></div>
    </div>
  </div>
  ${renderSlotInfoModal()}`;
}

function renderForm(){
  const b=currentBarracks();
  const grouped=cartGrouped();
  return `
  ${topbar()}
  <div class="page">
    <div class="shell">
      <div class="order-top-actions"><button class="back-btn" id="backMachineBtn">← ${t('backMachine')}</button><button class="back-btn" id="openAdminBtn">Admin</button></div>
      ${renderAlerts()}
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
            <div class="field"><label>${t('firstName')}</label><input id="soldierFirstName" value="${escapeHtml(state.form.soldierFirstName)}"></div>
            <div class="field"><label>${t('lastName')}</label><input id="soldierLastName" value="${escapeHtml(state.form.soldierLastName)}"></div>
          </div>
          <div class="two-col">
            <div class="field"><label>${t('kp')}</label><input id="soldierKp" value="${escapeHtml(state.form.soldierKp)}"></div>
            <div class="field"><label>${t('zug')}</label><input id="soldierZug" value="${escapeHtml(state.form.soldierZug)}"></div>
          </div>
          <div class="card">
            <h3>${t('sender')}</h3>
            <div class="two-col">
              <div class="field"><label>${t('senderName')}</label><input id="senderName" value="${escapeHtml(state.form.senderName)}"></div>
              <div class="field"><label>${t('senderStreet')}</label><input id="senderStreet" value="${escapeHtml(state.form.senderStreet)}"></div>
            </div>
            <div class="two-col">
              <div class="field"><label>${t('senderZip')}</label><input id="senderZip" value="${escapeHtml(state.form.senderZip)}"></div>
              <div class="field"><label>${t('senderEmail')}</label><input id="senderEmail" type="email" value="${escapeHtml(state.form.senderEmail)}"></div>
            </div>
          </div>
          <div class="field"><label>${t('soldierMsg')}</label><textarea id="message">${escapeHtml(state.form.message)}</textarea></div>
          ` : `
          <div class="card">
            <h3>${t('privateAddress')}</h3>
            <div class="field"><label>${t('senderName')}</label><input id="privateName" value="${escapeHtml(state.form.privateName)}"></div>
            <div class="field"><label>${t('street')}</label><input id="privateStreet" value="${escapeHtml(state.form.privateStreet)}"></div>
            <div class="field"><label>${t('zip')}</label><input id="privateZip" value="${escapeHtml(state.form.privateZip)}"></div>
            <div class="two-col">
              <div class="field"><label>${t('email')}</label><input id="privateEmail" type="email" value="${escapeHtml(state.form.privateEmail)}"></div>
              <div class="field"><label>${t('phone')}</label><input id="privatePhone" value="${escapeHtml(state.form.privatePhone)}"></div>
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
            
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderReview(){
  const grouped=cartGrouped();
  const b=currentBarracks();
  return `
  ${topbar()}
  <div class="page">
    <div class="shell">
      <h1 style="margin-top:0">${t('reviewTitle')}</h1>
      ${renderAlerts()}
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
            <button class="cta primary" id="submitOrderBtn" ${state.submitting ? 'disabled' : ''}>${state.submitting ? t('sendingOrder') : t('sendOrder')}</button>
          </div>
        </div>
        <div class="card">
          <h3>${t('deliveryDetails')}</h3>
          <div class="summary-line"><span>${t('shippingMode')}</span><strong>${state.shipping==='barracks' ? t('shippingBarracks') : t('shippingPrivate')}</strong></div>
          ${state.shipping==='barracks' ? `
          <div><strong>${t('shippingBarracks')}</strong><br>${b.label}<br>${escapeHtml(state.form.soldierFirstName)} ${escapeHtml(state.form.soldierLastName)}<br>Kp: ${escapeHtml(state.form.soldierKp)} / Zug: ${escapeHtml(state.form.soldierZug)}<br>${b.address_lines.join('<br>')}</div>
          <hr><div><strong>${t('sender')}</strong><br>${escapeHtml(state.form.senderName)}<br>${escapeHtml(state.form.senderStreet)}<br>${escapeHtml(state.form.senderZip)}<br>${escapeHtml(state.form.senderEmail)}</div>
          <hr><div><strong>${t('soldierMsg')}</strong><br>${escapeHtml(state.form.message || '-')}</div>` : `
          <div><strong>${t('shippingPrivate')}</strong><br>${escapeHtml(state.form.privateName)}<br>${escapeHtml(state.form.privateStreet)}<br>${escapeHtml(state.form.privateZip)}<br>${escapeHtml(state.form.privateEmail)}<br>${escapeHtml(state.form.privatePhone)}</div>`}
        </div>
      </div>
    </div>
  </div>`;
}

function renderConfirm(){
  const order = state.lastOrder;
  return `
  ${topbar()}
  <div class="page center">
    <div class="hero-card confirm-card">
      <h1 class="hero-title" style="font-size:56px">${t('confirmTitle')}</h1>
      <p class="hero-copy" style="font-size:22px">${t('confirmCopy')}</p>
      ${order ? `
      <div class="confirm-meta">
        <div class="summary-line"><span>${t('confirmOrderNo')}</span><strong>${escapeHtml(order.order_number || '-')}</strong></div>
        <div class="summary-line"><span>${t('confirmEmail')}</span><strong>${escapeHtml(order.customer_email || '-')}</strong></div>
        <div class="summary-line"><span>${t('orderDate')}</span><strong>${escapeHtml(order.created_at_label || '-')}</strong></div>
      </div>
      <div class="note" style="margin-top:12px">${t('orderSavedAdmin')}</div>` : ''}
      <div class="review-actions">
        <button class="back-btn" id="confirmBackMachine">${t('backMachine')}</button>
        <button class="cta primary" id="newOrderBtn">${t('newOrder')}</button>
      </div>
    </div>
  </div>`;
}


function renderAdminLogin(){
  return `
  ${topbar()}
  <div class="page center">
    <div class="hero-card admin-login-card">
      <div class="goldline">ARMEEBOX ADMIN</div>
      <h1 class="hero-title" style="font-size:48px">${t('adminLogin')}</h1>
      ${state.admin.loginError ? `<div class="alert error"><strong>${t('formErrorTitle')}</strong><ul><li>${escapeHtml(state.admin.loginError)}</li></ul></div>` : ''}
      <form id="adminLoginForm" class="admin-login-form">
        <div class="field"><label>${t('adminEmail')}</label><input id="adminEmailInput" type="email" autocomplete="username"></div>
        <div class="field"><label>${t('adminPassword')}</label><input id="adminPasswordInput" type="password" autocomplete="current-password"></div>
        <div class="review-actions">
          <button type="button" class="back-btn" id="adminBackToLanguage">← ${t('backMachine')}</button>
          <button type="submit" class="cta primary" id="adminLoginBtn" ${state.admin.loading ? 'disabled' : ''}>${state.admin.loading ? t('sendingOrder') : t('adminOpen')}</button>
        </div>
      </form>
    </div>
  </div>`;
}

function renderAdminOrders(){
  const filtered = filteredAdminOrders();
  const rows = filtered.map(order => `
    <tr>
      <td>${escapeHtml(order.order_number || '-')}</td>
      <td>${escapeHtml(formatDate(order.created_at))}</td>
      <td>${escapeHtml(order.customer_email || '-')}</td>
      <td>${escapeHtml(shippingMethodText(order.shipping_method || '-'))}</td>
      <td>${money(order.total ?? order.total_chf ?? 0)}</td>
      <td><span class="admin-chip ${escapeAttr(adminStatusLabel(order.order_status || order.status))}">${escapeHtml(adminStatusText(order.order_status || order.status || 'new'))}</span></td>
      <td><button class="back-btn" data-open-order="${escapeAttr(order.id)}">Öffnen</button></td>
    </tr>`).join('');
  const cards = filtered.map(order => `
    <div class="admin-order-card">
      <div class="admin-order-card-head">
        <div>
          <div class="admin-order-number">${escapeHtml(order.order_number || '-')}</div>
          <div class="note">${escapeHtml(formatDate(order.created_at))}</div>
        </div>
        <span class="admin-chip ${escapeAttr(adminStatusLabel(order.order_status || order.status))}">${escapeHtml(adminStatusText(order.order_status || order.status || 'new'))}</span>
      </div>
      <div class="admin-order-meta"><strong>E-Mail:</strong> ${escapeHtml(order.customer_email || '-')}</div>
      <div class="admin-order-meta"><strong>Versand:</strong> ${escapeHtml(shippingMethodText(order.shipping_method || '-'))}</div>
      <div class="admin-order-meta"><strong>Total:</strong> ${money(order.total ?? order.total_chf ?? 0)}</div>
      <button class="back-btn admin-open-btn" data-open-order="${escapeAttr(order.id)}">Öffnen</button>
    </div>`).join('');
  return `
  ${topbar()}
  <div class="page">
    <div class="shell">
      <div class="admin-toolbar">
        <div><h1 style="margin:0;font-size:48px">${t('adminOrders')}</h1><div class="note">${t('adminListHint')}</div></div>
        <div class="admin-actions">
          <button class="back-btn" id="adminProductsBtn">${t('adminProducts')}</button><button class="back-btn" id="adminDesignBtn">${t('adminDesign')}</button>
          <button class="back-btn" id="adminRefreshBtn">${t('adminRefresh')}</button>
          <button class="back-btn" id="adminLogoutBtn">${t('adminLogout')}</button>
        </div>
      </div>
      ${state.admin.loginError ? `<div class="alert error"><strong>${t('formErrorTitle')}</strong><ul><li>${escapeHtml(state.admin.loginError)}</li></ul></div>` : ''}
      <div class="card admin-filters">
        <div class="field" style="margin:0">
          <label>${t('adminSearch')}</label>
          <input id="adminSearchInput" type="search" placeholder="${escapeAttr(t('adminSearchPlaceholder'))}" value="${escapeAttr(state.admin.search || '')}">
        </div>
        <div class="field" style="margin:0">
          <label>${t('adminFilter')}</label>
          <select id="adminFilterSelect" class="form-select">
            <option value="all" ${state.admin.filter==='all'?'selected':''}>${t('adminFilterAll')}</option>
            <option value="new" ${state.admin.filter==='new'?'selected':''}>${t('adminFilterNew')}</option>
            <option value="in_progress" ${state.admin.filter==='in_progress'?'selected':''}>${t('adminFilterProgress')}</option>
            <option value="done" ${state.admin.filter==='done'?'selected':''}>${t('adminFilterDone')}</option>
          </select>
        </div>
        <div class="admin-filter-stats note">${filtered.length} / ${(state.admin.orders || []).length} ${t('adminOrders').toLowerCase()}</div>
      </div>
      <div class="card table-wrap">
        ${state.admin.loading ? `<div class="note">Lade Bestellungen …</div>` : filtered.length ? `
        <div class="admin-table-desktop">
          <table class="admin-table">
            <thead><tr><th>Bestellung</th><th>Datum</th><th>E-Mail</th><th>Versand</th><th>Total</th><th>Status</th><th></th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div class="admin-mobile-list">${cards}</div>` : `<div class="note">${state.admin.orders.length ? t('adminNoResults') : t('adminNoOrders')}</div>`}
      </div>
    </div>
  </div>`;
}

function renderAdminOrder(){
  const order = state.admin.currentOrder;
  if(!order){
    return `
    ${topbar()}
    <div class="page"><div class="shell"><div class="note">Bestellung wird geladen …</div></div></div>`;
  }
  const meta = order.order_meta || {};
  const itemsHtml = (order.items || []).map(item => `
    <div class="summary-line"><span>${escapeHtml(item.product_name || '-')} x${escapeHtml(item.quantity || 1)}</span><strong>${money(orderItemTotal(item))}</strong></div>`).join('');
  const barracksAddr = Array.isArray(meta.barracksAddress) ? meta.barracksAddress.filter(Boolean).join('<br>') : '';
  return `
  ${topbar()}
  <div class="page">
    <div class="shell">
      <div class="admin-toolbar">
        <div><h1 style="margin:0;font-size:44px">${t('adminDetails')}</h1><div class="note">${escapeHtml(order.order_number || '-')}</div></div>
        <div class="admin-actions">
          <button class="back-btn" id="adminBackToOrders">${t('adminBackList')}</button>
          <button class="back-btn" id="adminPrintDeliveryNoteBtn">Lieferschein drucken</button>
          <button class="back-btn" id="adminLogoutBtn">${t('adminLogout')}</button>
        </div>
      </div>
      ${state.admin.loginError ? `<div class="alert error"><strong>${t('formErrorTitle')}</strong><ul><li>${escapeHtml(state.admin.loginError)}</li></ul></div>` : ''}
      <div class="admin-detail-grid">
        <div class="card">
          <h3>${t('adminItems')}</h3>
          ${itemsHtml || '<div class="note">Keine Positionen</div>'}
          <div class="summary-line"><span>${t('subtotal')}</span><strong>${money(order.subtotal ?? order.subtotal_chf ?? 0)}</strong></div>
          <div class="summary-line"><span>${t('shipping')}</span><strong>${money(order.shipping_cost ?? order.shipping_chf ?? 0)}</strong></div>
          <div class="summary-line"><span>${t('total')}</span><strong>${money(order.total ?? order.total_chf ?? 0)}</strong></div>
        </div>
        <div class="card admin-meta">
          <h3>${t('adminOrderInfo')}</h3>
          <p><strong>${t('orderDate')}:</strong><br>${escapeHtml(formatDate(order.created_at))}</p>
          <p><strong>Kunden E-Mail:</strong><br>${escapeHtml(order.customer_email || '-')}</p>
          <p><strong>${t('shippingMode')}:</strong><br>${escapeHtml(shippingMethodText(order.shipping_method || '-'))}</p>
          <div class="field">
            <label>${t('adminStatus')}</label>
            <select id="adminStatusSelect" class="form-select">${ADMIN_STATUSES.map(status => `<option value="${status}" ${(order.order_status || order.status || 'new')===status ? 'selected' : ''}>${escapeHtml(adminStatusText(status))}</option>`).join('')}</select>
          </div>
          <div class="review-actions" style="justify-content:flex-start">
            <button class="cta primary" id="adminSaveStatusBtn" ${state.admin.statusSaving ? 'disabled' : ''}>${state.admin.statusSaving ? t('sendingOrder') : t('adminSaveStatus')}</button>
          </div>
        </div>
      </div>
      <div class="admin-detail-grid" style="margin-top:18px">
        <div class="card admin-block">
          <h3>${t('adminDeliveryAddress')}</h3>
          ${order.shipping_method === 'private' ? `
            <p>${escapeHtml(meta.privateName || '')}<br>${escapeHtml(meta.privateStreet || '')}<br>${escapeHtml(meta.privateZip || '')}${meta.privateCity ? ' ' + escapeHtml(meta.privateCity) : ''}<br>${escapeHtml(meta.privateEmail || '')}<br>${escapeHtml(meta.privatePhone || '')}</p>
          ` : `
            <p>${escapeHtml(meta.soldierFirstName || '')} ${escapeHtml(meta.soldierLastName || '')}<br>${escapeHtml(meta.soldierKp ? `Kp: ${meta.soldierKp}` : '')}${meta.soldierKp && meta.soldierZug ? ' / ' : ''}${escapeHtml(meta.soldierZug ? `Zug: ${meta.soldierZug}` : '')}<br>${barracksAddr}</p>
          `}
        </div>
        <div class="card admin-block">
          <h3>${order.shipping_method === 'private' ? t('adminContact') : t('adminSender')}</h3>
          ${order.shipping_method === 'private' ? `
            <p>${escapeHtml(order.customer_email || '')}</p>
          ` : `
            <p>${escapeHtml(meta.senderName || '')}<br>${escapeHtml(meta.senderStreet || '')}<br>${escapeHtml(meta.senderZip || '')}<br>${escapeHtml(meta.senderEmail || '')}</p>
          `}
        </div>
      </div>
      <div class="card admin-block" style="margin-top:18px">
        <h3>${t('adminMessageMeta')}</h3>
        <div class="admin-note">${escapeHtml(meta.message || order.notes || '-')}</div>
      </div>
    </div>
  </div>`;
}
function bindCommon(){
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.onclick=()=>{ state.lang=btn.dataset.lang; setRoute('intro'); });
  const menuToggle=document.getElementById('mainMenuToggle');
  const mainNav=document.getElementById('mainNav');
  if(menuToggle && mainNav){
    menuToggle.onclick=(e)=>{ e.stopPropagation(); mainNav.classList.toggle('is-open'); };
    document.addEventListener('click', (e)=>{ if(!e.target.closest('.nav-dropdown')) mainNav.classList.remove('is-open'); }, {once:true});
  }
  document.querySelectorAll('[data-nav]').forEach(btn=>btn.onclick=()=>setRoute(btn.getAttribute('data-nav')));
  document.querySelectorAll('[data-nav-page]').forEach(btn=>btn.onclick=()=>{ state.currentPageSlug=btn.getAttribute('data-nav-page'); setRoute('page'); });
}
function bindMachine(){
  document.querySelectorAll('.slot').forEach(el=>el.onclick=(e)=>{
    if(e.target.closest('[data-slot-info], .slot-bundle-select, [data-remove]')) return;
    onSelectProduct(el.dataset.id);
  });
  document.querySelectorAll('[data-remove]').forEach(el=>el.onclick=(e)=>{ e.stopPropagation(); removeOne(el.dataset.remove); });
  document.querySelectorAll('[data-slot-info]').forEach(el=>el.onclick=(e)=>{ e.stopPropagation(); openSlotInfo(el.getAttribute('data-slot-info')); });
  document.querySelectorAll('[data-slot-option]').forEach(el=>el.onclick=(e)=>{ e.stopPropagation(); cycleBundleOption(el.getAttribute('data-slot-option')); });
  document.querySelectorAll('[data-slot-option-select]').forEach(el=>{
    ['mousedown','click','keydown'].forEach(evt=>el.addEventListener(evt,(e)=>e.stopPropagation()));
    el.onchange=(e)=>{ e.stopPropagation(); setBundleOption(el.getAttribute('data-slot-option-select'), el.value); };
  });
  const orderBtn=document.getElementById('goOrderBtn'); if(orderBtn) orderBtn.onclick=()=>setRoute('order');
  const closeInfo=document.getElementById('closeSlotInfoBtn'); if(closeInfo) closeInfo.onclick=()=>closeSlotInfo();
  const backdrop=document.getElementById('slotInfoBackdrop'); if(backdrop) backdrop.onclick=(e)=>{ if(e.target===backdrop) closeSlotInfo(); };
}
function syncFormFields(){
  const ids=['barracksSelect','soldierFirstName','soldierLastName','soldierKp','soldierZug','senderName','senderStreet','senderZip','senderEmail','message','privateName','privateStreet','privateZip','privateEmail','privatePhone'];
  ids.forEach(id=>{
    const el=document.getElementById(id);
    if(!el) return;
    const update = ()=>{
      state.validationErrors = [];
      state.submitError = '';
      if(id==='barracksSelect') state.form.barracksIndex = Number(el.value);
      else state.form[id]=el.value;
      save();
    };
    if(id==='barracksSelect'){
      el.onchange = ()=>{ update(); render(); };
    } else {
      el.oninput = update;
      el.onchange = update;
    }
  });
  document.querySelectorAll('input[name="shipping"]').forEach(r=>r.onchange=()=>{
    state.shipping=r.value;
    state.validationErrors=[];
    state.submitError='';
    save();
    render();
  });
  const back=document.getElementById('backMachineBtn'); if(back) back.onclick=()=>setRoute('shop');
  const openAdmin=document.getElementById('openAdminBtn'); if(openAdmin) openAdmin.onclick=()=>setRoute('admin-login');
  const review=document.getElementById('reviewBtn'); if(review) review.onclick=()=>{
    const ok = validateOrder();
    if(ok) setRoute('review');
    else render();
  };
}

function validateOrder(){
  const errors = [];
  if(!state.cart.length) errors.push(t('validationCart'));
  if(state.shipping === 'barracks'){
    if(!state.form.soldierFirstName.trim() || !state.form.soldierLastName.trim()) errors.push(t('validationSoldierName'));
    if(!state.form.senderName.trim() || !state.form.senderStreet.trim() || !state.form.senderZip.trim()) errors.push(t('validationSender'));
    if(!isEmail(state.form.senderEmail)) errors.push(t('validationEmail'));
  } else {
    if(!state.form.privateName.trim() || !state.form.privateStreet.trim() || !state.form.privateZip.trim()) errors.push(t('validationPrivateAddress'));
    if(!isEmail(state.form.privateEmail)) errors.push(t('validationEmail'));
    if(!state.form.privatePhone.trim()) errors.push(t('validationPrivatePhone'));
  }
  state.validationErrors = [...new Set(errors)];
  state.submitError = '';
  save();
  return state.validationErrors.length === 0;
}

function buildOrderPayload(){
  const grouped = cartGrouped();
  const barracks = currentBarracks();
  return {
    lang: state.lang,
    shipping_method: state.shipping,
    shipping_cost: shippingCost(),
    subtotal: subtotal(),
    total: total(),
    item_count: state.cart.length,
    customer_email: getCustomerEmail(),
    barracks_label: state.shipping === 'barracks' ? barracks.label : null,
    recipient_name: state.shipping === 'barracks'
      ? `${state.form.soldierFirstName.trim()} ${state.form.soldierLastName.trim()}`.trim()
      : state.form.privateName.trim(),
    order_meta: {
      barracksIndex: state.form.barracksIndex,
      barracksAddress: state.shipping === 'barracks' ? barracks.address_lines : [],
      soldierFirstName: state.form.soldierFirstName.trim(),
      soldierLastName: state.form.soldierLastName.trim(),
      soldierKp: state.form.soldierKp.trim(),
      soldierZug: state.form.soldierZug.trim(),
      senderName: state.form.senderName.trim(),
      senderStreet: state.form.senderStreet.trim(),
      senderZip: state.form.senderZip.trim(),
      senderEmail: state.form.senderEmail.trim(),
      message: state.form.message.trim(),
      privateName: state.form.privateName.trim(),
      privateStreet: state.form.privateStreet.trim(),
      privateZip: state.form.privateZip.trim(),
      privateEmail: state.form.privateEmail.trim(),
      privatePhone: state.form.privatePhone.trim()
    },
    items: grouped.map(item => ({
      product_id: item.id,
      slot_code: item.slot,
      product_name: item.kind === 'bundle' ? `${item.name[state.lang]} (${item.multiplier}x / ${item.qtyLabel || localizedBundleLabel(item)})` : item.name[state.lang],
      quantity: item.kind === 'bundle' ? item.qty : item.qty,
      unit_price: item.price,
      total_price: item.price * item.qty
    }))
  };
}

async function submitOrder(){
  if(state.submitting) return;
  if(!validateOrder()){
    render();
    return;
  }
  state.submitting = true;
  state.submitError = '';
  save();
  render();
  try{
    const response = await fetch('/.netlify/functions/submit-order', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(buildOrderPayload())
    });
    const result = await response.json().catch(()=>({}));
    if(!response.ok || !result.success){
      throw new Error(result.error || t('submitError'));
    }
    state.lastOrder = {
      order_number: result.order?.order_number || result.order_number || '-',
      customer_email: result.order?.customer_email || getCustomerEmail(),
      created_at_label: new Date().toLocaleString(state.lang === 'fr' ? 'fr-CH' : 'de-CH')
    };
    resetOrderData();
    state.route = 'confirmation';
  }catch(error){
    state.submitError = error?.message || t('submitError');
  }finally{
    state.submitting = false;
    save();
    render();
  }
}

function bindReview(){
  document.getElementById('reviewBackMachine').onclick=()=>setRoute('shop');
  document.getElementById('reviewBackForm').onclick=()=>setRoute('order');
  document.getElementById('submitOrderBtn').onclick=()=>submitOrder();
}
function bindConfirm(){
  document.getElementById('confirmBackMachine').onclick=()=>setRoute('shop');
  document.getElementById('newOrderBtn').onclick=()=>setRoute('shop');
}


async function submitContact(){
  if(state.contact.sending) return;
  state.contact.error=''; state.contact.status='';
  if(!isEmail(state.contact.email) || !String(state.contact.message || '').trim()){
    state.contact.error = t('validationGeneric'); save(); render(); return;
  }
  state.contact.sending=true; save(); render();
  try{
    const response = await fetch('/.netlify/functions/contact-message', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({...state.contact, lang: state.lang})});
    const data = await response.json().catch(()=>({}));
    if(!response.ok || data.success===false) throw new Error(data.error || 'Kontakt konnte nicht gesendet werden');
    state.contact = { name:'', email:'', subject:'', message:'', sending:false, status:t('contactSuccess'), error:'' };
  }catch(error){ state.contact.sending=false; state.contact.error=error.message || 'Kontakt konnte nicht gesendet werden'; }
  save(); render();
}
function bindContact(){
  ['Name','Email','Subject','Message'].forEach(key=>{
    const el=document.getElementById('contact'+key); if(!el) return;
    el.oninput=()=>{ state.contact[key.toLowerCase()] = el.value; save(); };
  });
  const btn=document.getElementById('contactSendBtn'); if(btn) btn.onclick=()=>submitContact();
}

function addPageBlock(pageIndex, type){
  const page = state.admin.pages?.[pageIndex];
  if(!page) return;
  const meta = ensurePageMeta(page);
  meta.blocks.push(newPageBlock(type));
  save(); render();
}
function movePageBlock(pageIndex, blockIndex, delta){
  const page = state.admin.pages?.[pageIndex];
  if(!page) return;
  const blocks = ensurePageMeta(page).blocks;
  const j = blockIndex + delta;
  if(blockIndex < 0 || j < 0 || blockIndex >= blocks.length || j >= blocks.length) return;
  [blocks[blockIndex], blocks[j]] = [blocks[j], blocks[blockIndex]];
  save(); render();
}
function deletePageBlock(pageIndex, blockIndex){
  const page = state.admin.pages?.[pageIndex];
  if(!page) return;
  const blocks = ensurePageMeta(page).blocks;
  blocks.splice(blockIndex, 1);
  save(); render();
}
async function uploadCmsBlockImage(pageIndex, blockIndex, file){
  if(!file) return;
  const page = state.admin.pages?.[pageIndex];
  const block = page ? ensurePageMeta(page).blocks?.[blockIndex] : null;
  if(!block) return;
  const allowed = ['image/jpeg','image/png','image/webp','image/gif'];
  if(file.type && !allowed.includes(file.type)){
    state.admin.loginError = 'Nur JPG, PNG, WebP oder GIF erlaubt'; save(); render(); return;
  }
  if(file.size && file.size > 8 * 1024 * 1024){
    state.admin.loginError = 'Bild ist zu gross. Maximum 8 MB.'; save(); render(); return;
  }
  state.admin.productsMessage = 'CMS Bild wird hochgeladen …'; state.admin.loginError=''; save(); render();
  try{
    const form = new FormData();
    form.append('file', file);
    form.append('slot', `cms-${page.slug || pageIndex}`);
    const response = await fetch('/.netlify/functions/upload-product-image', { method:'POST', body: form, credentials:'same-origin' });
    const data = await response.json().catch(()=>({}));
    if(!response.ok || data.success === false || !data.publicUrl) throw new Error(data.error || 'Upload fehlgeschlagen');
    const freshPage = state.admin.pages?.[pageIndex];
    const freshBlock = freshPage ? ensurePageMeta(freshPage).blocks?.[blockIndex] : null;
    if(freshBlock) freshBlock.image_url = data.publicUrl;
    state.admin.productsMessage = 'CMS Bild hochgeladen. Bitte Design speichern.';
    save(); render();
  }catch(error){ state.admin.loginError = error.message || 'Upload fehlgeschlagen'; save(); render(); }
}

function bindAdminDesign(){
  const back=document.getElementById('adminDesignBackBtn'); if(back) back.onclick=()=>{ history.replaceState(null,'','#admin-orders'); state.route='admin-orders'; loadAdminOrders(); };
  const logout=document.getElementById('adminLogoutBtn'); if(logout) logout.onclick=()=>doAdminLogout();
  document.querySelectorAll('[data-design-field]').forEach(el=>el.oninput=()=>{ state.admin.design = state.admin.design || {}; state.admin.design[el.getAttribute('data-design-field')] = el.value; save(); renderDesignPreviewOnly(); });
  document.querySelectorAll('[data-page-field]').forEach(el=>el.oninput=()=>{ const i=Number(el.getAttribute('data-page-index')); const f=el.getAttribute('data-page-field'); state.admin.pages = state.admin.pages || []; if(state.admin.pages[i]){ let v = el.type === 'checkbox' ? el.checked : el.value; if(f==='sort_order') v=Number(v||0); state.admin.pages[i][f]=v; save(); } });
  document.querySelectorAll('[data-page-delete]').forEach(btn=>btn.onclick=()=>{ const i=Number(btn.getAttribute('data-page-delete')); const p=state.admin.pages?.[i]; if(!p) return; if(confirm(`Seite wirklich löschen: ${p.slug}?`)){ state.admin.pages.splice(i,1); save(); render(); } });
  document.querySelectorAll('[data-page-up]').forEach(btn=>btn.onclick=()=>moveAdminPage(Number(btn.getAttribute('data-page-up')),-1));
  document.querySelectorAll('[data-page-down]').forEach(btn=>btn.onclick=()=>moveAdminPage(Number(btn.getAttribute('data-page-down')),1));
  document.querySelectorAll('[data-add-block]').forEach(btn=>btn.onclick=()=>addPageBlock(Number(btn.getAttribute('data-page-index')), btn.getAttribute('data-add-block')));
  document.querySelectorAll('[data-block-field]').forEach(el=>el.oninput=()=>{ const pi=Number(el.getAttribute('data-page-index')); const bi=Number(el.getAttribute('data-block-index')); const f=el.getAttribute('data-block-field'); const page=state.admin.pages?.[pi]; const block=page ? ensurePageMeta(page).blocks?.[bi] : null; if(block){ block[f]=el.value; save(); } });
  document.querySelectorAll('[data-block-up]').forEach(btn=>btn.onclick=()=>movePageBlock(Number(btn.getAttribute('data-page-index')), Number(btn.getAttribute('data-block-index')), -1));
  document.querySelectorAll('[data-block-down]').forEach(btn=>btn.onclick=()=>movePageBlock(Number(btn.getAttribute('data-page-index')), Number(btn.getAttribute('data-block-index')), 1));
  document.querySelectorAll('[data-block-delete]').forEach(btn=>btn.onclick=()=>deletePageBlock(Number(btn.getAttribute('data-page-index')), Number(btn.getAttribute('data-block-index'))));
  document.querySelectorAll('[data-block-upload]').forEach(input=>input.onchange=()=>uploadCmsBlockImage(Number(input.getAttribute('data-page-index')), Number(input.getAttribute('data-block-index')), input.files?.[0]));
  const add=document.getElementById('adminAddPageBtn'); if(add) add.onclick=()=>addAdminPage();
  const saveBtn=document.getElementById('adminSaveDesignBtn'); if(saveBtn) saveBtn.onclick=()=>saveAdminDesign();
}
function renderDesignPreviewOnly(){
  const p=document.getElementById('designLivePreview'); if(!p) return;
  const d=state.admin.design || {};
  p.style.setProperty('--button-color', d.buttonColor || '#65a832'); p.style.setProperty('--slot-color', d.slotColor || '#3d5366'); p.style.setProperty('--frame-color', d.frameColor || '#b22b2b'); p.style.setProperty('--bg-color', d.bgColor || '#061527');
}
function slugifyPage(value){ return String(value||'').toLowerCase().trim().replace(/[ä]/g,'ae').replace(/[ö]/g,'oe').replace(/[ü]/g,'ue').replace(/[éèê]/g,'e').replace(/[àâ]/g,'a').replace(/[ç]/g,'c').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || `seite-${Date.now()}`; }
function addAdminPage(){ state.admin.pages = state.admin.pages || []; const base='neue-seite'; let slug=base; let n=2; const used=new Set(state.admin.pages.map(p=>p.slug)); while(used.has(slug)){ slug=`${base}-${n++}`; } state.admin.pages.push({ slug, title_de:'Neue Seite', title_fr:'Nouvelle page', content_de:'', content_fr:'', show_in_menu:true, is_active:true, sort_order: state.admin.pages.length+1 }); save(); render(); }
function moveAdminPage(index, delta){ const arr=state.admin.pages || []; const j=index+delta; if(index<0||j<0||index>=arr.length||j>=arr.length) return; [arr[index],arr[j]]=[arr[j],arr[index]]; arr.forEach((p,i)=>p.sort_order=i+1); save(); render(); }
function bindAdminLogin(){
  const back = document.getElementById('adminBackToLanguage');
  if(back) back.onclick = ()=>setRoute('language');
  const form = document.getElementById('adminLoginForm');
  if(form) form.onsubmit = (event)=>{
    event.preventDefault();
    const email = document.getElementById('adminEmailInput')?.value || '';
    const password = document.getElementById('adminPasswordInput')?.value || '';
    doAdminLogin(email, password);
  };
}



function pageBlocks(page){
  const meta = page?.meta && typeof page.meta === 'object' ? page.meta : {};
  return Array.isArray(meta.blocks) ? meta.blocks : [];
}
function ensurePageMeta(page){
  if(!page.meta || typeof page.meta !== 'object') page.meta = {};
  if(!Array.isArray(page.meta.blocks)) page.meta.blocks = [];
  return page.meta;
}
function blockText(block, key){
  const langKey = `${key}_${state.lang}`;
  const deKey = `${key}_de`;
  const frKey = `${key}_fr`;
  return String(block?.[langKey] || block?.[deKey] || block?.[frKey] || '');
}
function renderButtonUrl(url){
  const value = String(url || '').trim();
  if(!value) return '#';
  if(value.startsWith('#') || value.startsWith('/') || /^https?:\/\//i.test(value) || /^mailto:/i.test(value)) return value;
  return `#${slugifyPage(value)}`;
}
function renderPageBlock(block){
  const type = block?.type || 'text';
  const align = ['left','center','right'].includes(block?.align) ? block.align : 'left';
  const style = `${block?.bgColor ? `--block-bg:${escapeAttr(block.bgColor)};` : ''}${block?.textColor ? `--block-color:${escapeAttr(block.textColor)};` : ''}`;
  if(type === 'heading') return `<section class="pb-block pb-heading align-${align}" style="${style}"><h2>${escapeHtml(blockText(block,'title'))}</h2></section>`;
  if(type === 'image'){
    const url = String(block?.image_url || '').trim();
    const alt = blockText(block,'alt') || blockText(block,'title');
    if(!url) return '';
    return `<section class="pb-block pb-image align-${align}" style="${style}"><img src="${escapeAttr(url)}" alt="${escapeAttr(alt)}"></section>`;
  }
  if(type === 'button'){
    const label = blockText(block,'label') || 'Mehr erfahren';
    return `<section class="pb-block pb-button align-${align}" style="${style}"><a class="cta primary" href="${escapeAttr(renderButtonUrl(block?.url))}">${escapeHtml(label)}</a></section>`;
  }
  if(type === 'divider') return `<div class="pb-divider"></div>`;
  if(type === 'quote') return `<section class="pb-block pb-quote align-${align}" style="${style}"><blockquote>${escapeHtml(blockText(block,'text')).replace(/\n/g,'<br>')}</blockquote></section>`;
  if(type === 'columns') return `<section class="pb-block pb-columns" style="${style}"><div>${escapeHtml(blockText(block,'left')).replace(/\n/g,'<br>')}</div><div>${escapeHtml(blockText(block,'right')).replace(/\n/g,'<br>')}</div></section>`;
  return `<section class="pb-block pb-text align-${align}" style="${style}">${escapeHtml(blockText(block,'text') || blockText(block,'title')).replace(/\n/g,'<br>')}</section>`;
}
function richTextHtml(value){
  const lines = String(value || '').split(/\r?\n/);
  const htmlLines = lines.map(line => {
    let v = escapeHtml(line);
    // light CMS formatting without dangerous HTML: **bold**, __underline__, *italic*
    v = v.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    v = v.replace(/__([^_]+)__/g, '<u>$1</u>');
    v = v.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    if(/^###\s+/.test(v)) return `<h3>${v.replace(/^###\s+/, '')}</h3>`;
    if(/^##\s+/.test(v)) return `<h2>${v.replace(/^##\s+/, '')}</h2>`;
    if(/^#\s+/.test(v)) return `<h1>${v.replace(/^#\s+/, '')}</h1>`;
    if(/^[-•]\s+/.test(v)) return `<div class="cms-bullet">${v.replace(/^[-•]\s+/, '')}</div>`;
    return v;
  });
  return htmlLines.join('<br>');
}

function renderPageContent(page){
  const blocks = pageBlocks(page).filter(Boolean);
  const fallback = page ? pageContent(page).trim() : '';
  const parts = [];

  // Important: the normal page content must remain visible even when Page Builder modules exist.
  // This is the base/fallback text field in the CMS. It is shown before the modules.
  if(fallback){
    parts.push(`<div class="content-card page-fallback-content">${richTextHtml(fallback)}</div>`);
  }

  if(blocks.length){
    parts.push(`<div class="page-builder-content">${blocks.map(renderPageBlock).join('')}</div>`);
  }

  if(!parts.length){
    parts.push(`<div class="content-card empty-page">${state.lang === 'fr' ? 'Contenu à venir.' : 'Inhalt folgt.'}</div>`);
  }

  return parts.join('');
}
function newPageBlock(type='text'){
  const base = { id: `blk_${Date.now()}_${Math.random().toString(16).slice(2)}`, type, align:'left', bgColor:'', textColor:'' };
  if(type === 'heading') return { ...base, title_de:'Neue Überschrift', title_fr:'Nouveau titre' };
  if(type === 'image') return { ...base, image_url:'', alt_de:'Bild', alt_fr:'Image' };
  if(type === 'button') return { ...base, label_de:'Button', label_fr:'Bouton', url:'#shop', align:'center' };
  if(type === 'divider') return { ...base };
  if(type === 'quote') return { ...base, text_de:'Zitat oder Hinweis', text_fr:'Citation ou note' };
  if(type === 'columns') return { ...base, left_de:'Linke Spalte', left_fr:'Colonne gauche', right_de:'Rechte Spalte', right_fr:'Colonne droite' };
  return { ...base, text_de:'Neuer Textblock', text_fr:'Nouveau bloc de texte' };
}
function blockLabel(type){ return ({heading:'Überschrift',text:'Text',image:'Bild/Logo',button:'Button/Link',divider:'Trennlinie',quote:'Zitat/Hinweis',columns:'2 Spalten'})[type] || 'Text'; }
function renderBlockEditor(block, pageIndex, blockIndex){
  const type = block?.type || 'text';
  const baseAttrs = `data-page-index="${pageIndex}" data-block-index="${blockIndex}"`;
  const styleFields = `<div class="pb-admin-style-row"><div class="field"><label>Ausrichtung</label><select ${baseAttrs} data-block-field="align"><option value="left" ${block.align==='left'?'selected':''}>Links</option><option value="center" ${block.align==='center'?'selected':''}>Zentriert</option><option value="right" ${block.align==='right'?'selected':''}>Rechts</option></select></div><div class="field"><label>Textfarbe</label><input ${baseAttrs} data-block-field="textColor" type="color" value="${escapeAttr(block.textColor || '#ffffff')}"></div><div class="field"><label>Block-Hintergrund</label><input ${baseAttrs} data-block-field="bgColor" type="color" value="${escapeAttr(block.bgColor || '#071d36')}"></div></div>`;
  let body = '';
  if(type === 'heading') body = `<div class="admin-product-row admin-product-row-equal"><div class="field"><label>Überschrift DE</label><input ${baseAttrs} data-block-field="title_de" value="${escapeAttr(block.title_de || '')}"></div><div class="field"><label>Überschrift FR</label><input ${baseAttrs} data-block-field="title_fr" value="${escapeAttr(block.title_fr || '')}"></div></div>`;
  else if(type === 'image') body = `<div class="field"><label>Bild / Logo URL</label><input ${baseAttrs} data-block-field="image_url" value="${escapeAttr(block.image_url || '')}" placeholder="https://.../bild.png"></div><div class="cms-image-upload-row"><input type="file" accept="image/png,image/jpeg,image/webp,image/gif" ${baseAttrs} data-block-upload><span>Bild hochladen oder URL einfügen</span></div>${block.image_url ? `<div class="cms-block-image-preview"><img src="${escapeAttr(block.image_url)}" alt=""></div>` : ''}<div class="admin-product-row admin-product-row-equal"><div class="field"><label>Alt Text DE</label><input ${baseAttrs} data-block-field="alt_de" value="${escapeAttr(block.alt_de || '')}"></div><div class="field"><label>Alt Text FR</label><input ${baseAttrs} data-block-field="alt_fr" value="${escapeAttr(block.alt_fr || '')}"></div></div>`;
  else if(type === 'button') body = `<div class="admin-product-row admin-product-row-equal"><div class="field"><label>Button DE</label><input ${baseAttrs} data-block-field="label_de" value="${escapeAttr(block.label_de || '')}"></div><div class="field"><label>Button FR</label><input ${baseAttrs} data-block-field="label_fr" value="${escapeAttr(block.label_fr || '')}"></div></div><div class="field"><label>Link / Ziel</label><input ${baseAttrs} data-block-field="url" value="${escapeAttr(block.url || '')}" placeholder="#shop, #kontakt, https://..."></div>`;
  else if(type === 'quote') body = `<div class="admin-product-row admin-product-row-equal"><div class="field"><label>Zitat DE</label><textarea class="cms-editor small" ${baseAttrs} data-block-field="text_de">${escapeHtml(block.text_de || '')}</textarea></div><div class="field"><label>Zitat FR</label><textarea class="cms-editor small" ${baseAttrs} data-block-field="text_fr">${escapeHtml(block.text_fr || '')}</textarea></div></div>`;
  else if(type === 'columns') body = `<div class="admin-product-row admin-product-row-equal"><div class="field"><label>Spalte links DE</label><textarea class="cms-editor small" ${baseAttrs} data-block-field="left_de">${escapeHtml(block.left_de || '')}</textarea></div><div class="field"><label>Spalte links FR</label><textarea class="cms-editor small" ${baseAttrs} data-block-field="left_fr">${escapeHtml(block.left_fr || '')}</textarea></div></div><div class="admin-product-row admin-product-row-equal"><div class="field"><label>Spalte rechts DE</label><textarea class="cms-editor small" ${baseAttrs} data-block-field="right_de">${escapeHtml(block.right_de || '')}</textarea></div><div class="field"><label>Spalte rechts FR</label><textarea class="cms-editor small" ${baseAttrs} data-block-field="right_fr">${escapeHtml(block.right_fr || '')}</textarea></div></div>`;
  else if(type === 'divider') body = `<div class="note">Trennlinie ohne Inhalt. Du kannst sie hoch/runter verschieben.</div>`;
  else body = `<div class="admin-product-row admin-product-row-equal"><div class="field"><label>Text DE</label><textarea class="cms-editor small" ${baseAttrs} data-block-field="text_de">${escapeHtml(block.text_de || '')}</textarea></div><div class="field"><label>Text FR</label><textarea class="cms-editor small" ${baseAttrs} data-block-field="text_fr">${escapeHtml(block.text_fr || '')}</textarea></div></div>`;
  return `<div class="cms-block-editor"><div class="cms-block-head"><strong>${blockIndex+1}. ${blockLabel(type)}</strong><div class="cms-page-actions"><button class="back-btn" type="button" ${baseAttrs} data-block-up>Hoch</button><button class="back-btn" type="button" ${baseAttrs} data-block-down>Runter</button><button class="back-btn danger" type="button" ${baseAttrs} data-block-delete>Löschen</button></div></div>${body}${type !== 'divider' ? styleFields : ''}</div>`;
}

function renderContentPage(){
  const page = findSitePage(state.currentPageSlug);
  if(state.currentPageSlug === 'kontakt') return renderContactPage();
  return `
  ${topbar()}
  <div class="page"><div class="shell content-shell">
    <h1>${escapeHtml(page ? pageTitle(page) : t('menuIdea'))}</h1>
    ${renderPageContent(page)}
  </div></div>`;
}
function renderContactPage(){
  const page = findSitePage('kontakt');
  return `
  ${topbar()}
  <div class="page"><div class="shell content-shell">
    <h1>${escapeHtml(page ? pageTitle(page) : t('contactTitle'))}</h1>
    ${page ? renderPageContent(page) : ''}
    <div class="card contact-card">
      ${state.contact.error ? `<div class="alert error"><strong>${t('formErrorTitle')}</strong><ul><li>${escapeHtml(state.contact.error)}</li></ul></div>` : ''}
      ${state.contact.status ? `<div class="note">${escapeHtml(state.contact.status)}</div>` : ''}
      <div class="two-col"><div class="field"><label>${t('contactName')}</label><input id="contactName" value="${escapeAttr(state.contact.name)}"></div><div class="field"><label>${t('email')}</label><input id="contactEmail" type="email" value="${escapeAttr(state.contact.email)}"></div></div>
      <div class="field"><label>${t('contactSubject')}</label><input id="contactSubject" value="${escapeAttr(state.contact.subject)}"></div>
      <div class="field"><label>${t('contactMessage')}</label><textarea id="contactMessage">${escapeHtml(state.contact.message)}</textarea></div>
      <button class="cta primary" id="contactSendBtn" ${state.contact.sending ? 'disabled' : ''}>${state.contact.sending ? t('contactSending') : t('contactSend')}</button>
    </div>
  </div></div>`;
}
function renderAdminDesign(){
  const d = state.admin.design || state.settings || {};
  const pages = [...(state.admin.pages || state.pages || [])].sort((a,b)=>Number(a.sort_order ?? 999)-Number(b.sort_order ?? 999) || String(a.slug||'').localeCompare(String(b.slug||'')));
  state.admin.pages = pages;
  const previewStyle = `--button-color:${escapeAttr(d.buttonColor || '#65a832')};--slot-color:${escapeAttr(d.slotColor || '#3d5366')};--frame-color:${escapeAttr(d.frameColor || '#b22b2b')};--bg-color:${escapeAttr(d.bgColor || '#061527')}`;
  return `
  ${topbar()}
  <div class="page"><div class="shell admin-shell cms-pro-shell">
    <div class="admin-head"><div><h1>${t('adminCmsPro')}</h1><div class="note">${t('adminDesignHint')} – ${t('adminPageHint')}</div></div><div class="admin-actions"><button class="back-btn" id="adminDesignBackBtn">${t('adminBackOrders')}</button><button class="back-btn" id="adminLogoutBtn">${t('adminLogout')}</button></div></div>
    ${state.admin.loginError ? `<div class="alert error"><strong>${t('formErrorTitle')}</strong><ul><li>${escapeHtml(state.admin.loginError)}</li></ul></div>` : ''}
    ${state.admin.productsMessage ? `<div class="note">${escapeHtml(state.admin.productsMessage)}</div>` : ''}
    <div class="cms-layout">
      <div class="card cms-card"><h3>Design</h3>
        <div class="admin-product-row admin-product-row-equal"><div class="field"><label>${t('adminTitleDe')}</label><input data-design-field="machineTitle_de" value="${escapeAttr(d.machineTitle_de || d.machineTitle || '')}" placeholder="Automat ARMEEBOX"></div><div class="field"><label>${t('adminTitleFr')}</label><input data-design-field="machineTitle_fr" value="${escapeAttr(d.machineTitle_fr || '')}" placeholder="Automate ARMEEBOX"></div></div>
        <div class="admin-product-row admin-product-row-equal"><div class="field"><label>${t('adminSloganDe')}</label><input data-design-field="machineInner_de" value="${escapeAttr(d.machineInner_de || d.machineInner || '')}" placeholder="Achtung, fertig, Fresspäckli"></div><div class="field"><label>${t('adminSloganFr')}</label><input data-design-field="machineInner_fr" value="${escapeAttr(d.machineInner_fr || '')}" placeholder="À vos marques, prêts, paquet du soldat"></div></div>
        <div class="admin-product-row admin-product-row-equal"><div class="field"><label>${t('adminButtonColor')}</label><input data-design-field="buttonColor" type="color" value="${escapeAttr(d.buttonColor || '#65a832')}"></div><div class="field"><label>${t('adminSlotColor')}</label><input data-design-field="slotColor" type="color" value="${escapeAttr(d.slotColor || '#3d5366')}"></div><div class="field"><label>${t('adminFrameColor')}</label><input data-design-field="frameColor" type="color" value="${escapeAttr(d.frameColor || '#b22b2b')}"></div><div class="field"><label>${t('adminBgColor')}</label><input data-design-field="bgColor" type="color" value="${escapeAttr(d.bgColor || '#061527')}"></div></div>
      </div>
      <div class="card cms-preview" id="designLivePreview" style="${previewStyle}"><h3>Live Preview</h3><div class="mini-machine"><div class="mini-frame"><div class="mini-title">${escapeHtml(d.machineTitle_de || d.machineTitle || t('machineTitle'))}</div><div class="mini-inner">${escapeHtml(d.machineInner_de || d.machineInner || t('machineInner'))}</div><div class="mini-slot">Slot</div><button>Button</button></div></div></div>
    </div>
    <div class="admin-head cms-subhead"><div><h2>${t('adminPagesTitle')}</h2><div class="note">${t('adminBigEditor')}</div></div><button class="cta primary" id="adminAddPageBtn">+ ${t('adminAddPage')}</button></div>
    <div class="cms-pages-list">${pages.map((p,i)=>`<div class="card cms-page-card ${p.is_active===false ? 'is-inactive' : ''}">
      <div class="cms-page-head"><div><strong>${escapeHtml(p.title_de || p.slug)}</strong><span>#${escapeHtml(p.slug || '')}</span></div><div class="cms-page-actions"><button class="back-btn" type="button" data-page-up="${i}">${t('adminMoveUp')}</button><button class="back-btn" type="button" data-page-down="${i}">${t('adminMoveDown')}</button><button class="back-btn danger" type="button" data-page-delete="${i}">${t('adminDeletePage')}</button></div></div>
      <div class="admin-product-row admin-product-row-equal cms-meta-row"><div class="field"><label>${t('adminPageSlug')}</label><input data-page-field="slug" data-page-index="${i}" value="${escapeAttr(p.slug || '')}" onblur="this.value=slugifyPage(this.value)"></div><div class="field"><label>${t('adminPageSort')}</label><input data-page-field="sort_order" data-page-index="${i}" type="number" value="${escapeAttr(String(p.sort_order ?? i+1))}"></div><label class="admin-toggle cms-check"><input data-page-field="show_in_menu" data-page-index="${i}" type="checkbox" ${p.show_in_menu !== false ? 'checked' : ''}><span>${t('adminShowMenu')}</span></label><label class="admin-toggle cms-check"><input data-page-field="is_active" data-page-index="${i}" type="checkbox" ${p.is_active !== false ? 'checked' : ''}><span>${t('adminPageActive')}</span></label></div>
      <div class="admin-product-row admin-product-row-equal"><div class="field"><label>${t('adminTitleDe')}</label><input data-page-field="title_de" data-page-index="${i}" value="${escapeAttr(p.title_de || '')}"></div><div class="field"><label>${t('adminTitleFr')}</label><input data-page-field="title_fr" data-page-index="${i}" value="${escapeAttr(p.title_fr || '')}"></div></div>
      <div class="admin-product-row admin-product-row-equal"><div class="field"><label>Fallback Text DE</label><textarea class="cms-editor" data-page-field="content_de" data-page-index="${i}">${escapeHtml(p.content_de || '')}</textarea></div><div class="field"><label>Fallback Text FR</label><textarea class="cms-editor" data-page-field="content_fr" data-page-index="${i}">${escapeHtml(p.content_fr || '')}</textarea></div></div>
      <div class="cms-builder-zone">
        <div class="cms-builder-head"><div><strong>Page Builder Module</strong><span>Baue diese Seite mit Blöcken: Text, Bild, Button, Spalten usw.</span></div><div class="cms-add-blocks">
          <button type="button" class="back-btn" data-add-block="heading" data-page-index="${i}">+ Überschrift</button>
          <button type="button" class="back-btn" data-add-block="text" data-page-index="${i}">+ Text</button>
          <button type="button" class="back-btn" data-add-block="image" data-page-index="${i}">+ Bild/Logo</button>
          <button type="button" class="back-btn" data-add-block="button" data-page-index="${i}">+ Button</button>
          <button type="button" class="back-btn" data-add-block="columns" data-page-index="${i}">+ 2 Spalten</button>
          <button type="button" class="back-btn" data-add-block="quote" data-page-index="${i}">+ Hinweis</button>
          <button type="button" class="back-btn" data-add-block="divider" data-page-index="${i}">+ Linie</button>
        </div></div>
        <div class="cms-block-list">${(pageBlocks(p).length ? pageBlocks(p) : []).map((b,bi)=>renderBlockEditor(b,i,bi)).join('') || '<div class="note">Noch keine Module. Füge oben einen Block hinzu.</div>'}</div>
      </div>
    </div>`).join('')}</div>
    <div class="admin-primary-row sticky-save"><button class="cta primary" id="adminSaveDesignBtn">${t('adminDesignSave')}</button></div>
  </div></div>`;
}
function renderAdminProducts(){
  const products = adminProductsList();
  return `
  ${topbar()}
  <div class="page">
    <div class="shell admin-shell">
      <div class="admin-head">
        <div>
          <h1>${t('adminProducts')}</h1>
          <div class="note">${t('adminProductsHint')}</div>
        </div>
        <div class="admin-actions">
          <button class="back-btn" id="adminBackToOrdersBtn">${t('adminBackOrders')}</button>
          <button class="back-btn" id="adminProductsRefreshBtn">${t('adminProductsRefresh')}</button>
          <button class="back-btn admin-add-slot-btn" id="adminAddSlotBtn">${t('adminAddSlot')}</button>
          <button class="back-btn" id="adminLogoutBtn">${t('adminLogout')}</button>
        </div>
      </div>
      ${state.admin.loginError ? `<div class="alert error"><strong>${t('formErrorTitle')}</strong><ul><li>${escapeHtml(state.admin.loginError)}</li></ul></div>` : ''}
      ${state.admin.productsMessage ? `<div class="note">${escapeHtml(state.admin.productsMessage)}</div>` : ''}
      <div class="inventory-summary">
        <div><strong>${products.length}</strong><span>Produkte</span></div>
        <div><strong>${products.filter(p=>isLowStock(p)).length}</strong><span>${t('stockLow')}</span></div>
        <div><strong>${products.filter(p=>isSoldOut(p)).length}</strong><span>${t('stockOut')}</span></div>
        <div><strong>${money(products.reduce((sum,p)=>sum + productStock(p).current * Number(p.price || 0),0))}</strong><span>Lagerwert</span></div>
      </div>
      <div class="admin-products-grid">
        ${products.length ? products.map((product, index) => `
          <div class="card admin-product-card" draggable="true" data-draggable-slot="${index}">
            <div class="admin-slot-head">
              <div>
                <div class="admin-product-slot">${t('adminSlot')} ${escapeHtml(product.slot)}</div>
                <div class="note">${t('adminDragHint')}</div>
              </div>
              <div class="admin-slot-tools">
                <div class="field" style="margin:0"><label>Slotnummer</label><input class="admin-slot-number" data-product-field="slotNumber" data-product-index="${index}" type="number" min="1" step="1" value="${escapeAttr(String(product.slotNumber))}"></div>
                <button class="back-btn admin-delete-slot-btn" type="button" data-delete-slot="${index}">${t('adminDeleteSlot')}</button>
              </div>
            </div>
            <div class="field"><label>${t('adminSlotType')}</label><select data-product-field="slot_type" data-product-index="${index}"><option value="normal" ${product.slot_type !== 'bundle' ? 'selected' : ''}>${t('adminSlotTypeNormal')}</option><option value="bundle" ${product.slot_type === 'bundle' ? 'selected' : ''}>${t('adminSlotTypeBundle')}</option></select></div>
            <div class="admin-product-row admin-product-row-equal">
              <div class="field"><label>${t('adminNameDe')}</label><input data-product-field="name_de" data-product-index="${index}" value="${escapeAttr(product.name?.de || '')}"></div>
              <div class="field"><label>${t('adminNameFr')}</label><input data-product-field="name_fr" data-product-index="${index}" value="${escapeAttr(product.name?.fr || product.name?.de || '')}"></div>
            </div>
            <div class="admin-product-row">
              <div class="field"><label>${t('adminPrice')}</label><input data-product-field="price" data-product-index="${index}" type="number" min="0" step="0.05" value="${escapeAttr(String(product.price ?? 0))}"></div>
              <div class="field admin-active-field"><label>${t('adminActive')}</label><label class="admin-toggle"><input data-product-field="active" data-product-index="${index}" type="checkbox" ${product.active !== false ? 'checked' : ''}><span>${product.active !== false ? 'On' : 'Off'}</span></label></div>
            </div>
            <div class="admin-product-row admin-product-row-equal inventory-row">
              <div class="field"><label>${t('adminStockTotal')}</label><input data-product-field="stock_total" data-product-index="${index}" type="number" min="0" step="1" value="${escapeAttr(String(productStock(product).total))}"></div>
              <div class="field"><label>${t('adminStockCurrent')}</label><input data-product-field="stock_current" data-product-index="${index}" type="number" min="0" step="1" value="${escapeAttr(String(productStock(product).current))}"></div>
              <div class="field"><label>${t('adminStockMin')}</label><input data-product-field="stock_min" data-product-index="${index}" type="number" min="0" step="1" value="${escapeAttr(String(productStock(product).min))}"></div>
              <div class="inventory-status ${stockStatusClass(product)}"><strong>${t('adminStockStatus')}</strong><span>${stockStatusText(product)}</span></div>
            </div>
            <div class="admin-product-row admin-product-row-equal bundle-only ${product.slot_type === 'bundle' ? '' : 'is-hidden'}">
              <div class="field"><label>${t('adminBundleContentDe')}</label><textarea data-product-field="bundle_content_de" data-product-index="${index}">${escapeHtml(product.bundle_content?.de || '')}</textarea></div>
              <div class="field"><label>${t('adminBundleContentFr')}</label><textarea data-product-field="bundle_content_fr" data-product-index="${index}">${escapeHtml(product.bundle_content?.fr || '')}</textarea></div>
            </div>
            <div class="admin-product-row admin-product-row-equal bundle-only ${product.slot_type === 'bundle' ? '' : 'is-hidden'}">
              <div class="field"><label>${t('adminBundleLabelDe')}</label><input data-product-field="option_label_de" data-product-index="${index}" value="${escapeAttr(product.option_label?.de || '')}"></div>
              <div class="field"><label>${t('adminBundleLabelFr')}</label><input data-product-field="option_label_fr" data-product-index="${index}" value="${escapeAttr(product.option_label?.fr || '')}"></div>
            </div>
            <div class="field bundle-only ${product.slot_type === 'bundle' ? '' : 'is-hidden'}"><label>${t('adminBundleOptions')}</label><input data-product-field="quantity_options" data-product-index="${index}" value="${escapeAttr((product.quantity_options || [2,3,4]).join(','))}"></div>
            <div class="field"><label>${t('adminImageUrl')}</label><input data-product-field="image_url" data-product-index="${index}" placeholder="https://.../bild.png" value="${escapeAttr(product.image_url || '')}"></div>
            <div class="admin-image-upload" data-image-drop-index="${index}">
              <input class="admin-file-input" id="productImageInput-${index}" type="file" accept="image/png,image/jpeg,image/webp,image/gif" data-image-upload-index="${index}">
              <label class="admin-upload-label" for="productImageInput-${index}">${t('adminImageUpload')}</label>
              <div class="admin-image-preview">${product.image_url ? `<img src="${escapeAttr(product.image_url)}" alt="Produktbild Slot ${escapeAttr(product.slot)}" loading="lazy">` : `<span>Kein Bild hinterlegt</span>`}</div>
            </div>
          </div>
        `).join('') : `<div class="note">${t('adminNoProducts')}</div>`}
      </div>
      <div class="admin-primary-row">
        <button class="cta primary" id="adminSaveProductsBtn" ${state.admin.productsSaving ? 'disabled' : ''}>${state.admin.productsSaving ? t('adminProductsSaving') : t('adminProductsSave')}</button>
      </div>
    </div>
  </div>`;
}

function bindAdminOrders(){
  const refresh = document.getElementById('adminRefreshBtn');
  if(refresh) refresh.onclick = ()=>loadAdminOrders();
  const productsBtn = document.getElementById('adminProductsBtn');
  if(productsBtn) productsBtn.onclick = ()=>{ history.replaceState(null,'','#admin-products'); state.route='admin-products'; loadAdminProducts(); };
  const designBtn = document.getElementById('adminDesignBtn');
  if(designBtn) designBtn.onclick = ()=>{ history.replaceState(null,'','#admin-design'); state.route='admin-design'; loadAdminDesign(); };
  const logout = document.getElementById('adminLogoutBtn');
  if(logout) logout.onclick = ()=>doAdminLogout();
  const search = document.getElementById('adminSearchInput');
  if(search){
    search.oninput = ()=>{
      const value = search.value;
      state.admin.search = value;
      save();
      render();
      requestAnimationFrame(() => {
        const next = document.getElementById('adminSearchInput');
        if(next){
          next.focus();
          try { next.setSelectionRange(value.length, value.length); } catch(_) {}
        }
      });
    };
  }
  const filter = document.getElementById('adminFilterSelect');
  if(filter){
    filter.onchange = ()=>{
      state.admin.filter = filter.value;
      save();
      render();
    };
  }
  document.querySelectorAll('[data-open-order]').forEach(btn => btn.onclick = ()=>{
    const id = btn.getAttribute('data-open-order');
    history.replaceState(null,'',`#admin-order?id=${encodeURIComponent(id)}`);
    state.route = 'admin-order';
    loadAdminOrder(id);
  });
}

function bindAdminOrder(){
  const back = document.getElementById('adminBackToOrders');
  if(back) back.onclick = ()=>{ history.replaceState(null,'','#admin-orders'); setRoute('admin-orders'); loadAdminOrders(); };
  const logout = document.getElementById('adminLogoutBtn');
  if(logout) logout.onclick = ()=>doAdminLogout();
  const productsBtn = document.getElementById('adminGoProductsBtn');
  if(productsBtn) productsBtn.onclick = ()=>{ history.replaceState(null,'','#admin-products'); state.route='admin-products'; loadAdminProducts(); };
  const designBtn = document.getElementById('adminDesignBtn');
  if(designBtn) designBtn.onclick = ()=>{ history.replaceState(null,'','#admin-design'); state.route='admin-design'; loadAdminDesign(); };
  const printBtn = document.getElementById('adminPrintDeliveryNoteBtn');
  if(printBtn) printBtn.onclick = ()=>printDeliveryNote();
  const saveBtn = document.getElementById('adminSaveStatusBtn');
  if(saveBtn) saveBtn.onclick = ()=>{
    const status = document.getElementById('adminStatusSelect')?.value || 'new';
    if(state.admin.currentOrder?.id) saveAdminStatus(state.admin.currentOrder.id, status);
  };
}
function bindAdminProducts(){
  const back = document.getElementById('adminBackToOrdersBtn');
  if(back) back.onclick = ()=>{ history.replaceState(null,'','#admin-orders'); state.route='admin-orders'; loadAdminOrders(); };
  const refresh = document.getElementById('adminProductsRefreshBtn');
  if(refresh) refresh.onclick = ()=>loadAdminProducts();
  const logout = document.getElementById('adminLogoutBtn');
  if(logout) logout.onclick = ()=>doAdminLogout();
  document.querySelectorAll('[data-product-field]').forEach(input => {
    input.oninput = input.onchange = ()=>{
      const index = Number(input.getAttribute('data-product-index'));
      const field = input.getAttribute('data-product-field');
      let products = adminProductsList();
      const product = products[index];
      if(!product) return;
      if(field === 'active') product.active = !!input.checked;
      else if(field === 'price') product.price = Number(input.value || 0);
      else if(field === 'slot_type') product.slot_type = input.value === 'bundle' ? 'bundle' : 'normal';
      else if(field === 'bundle_content_de') product.bundle_content = { ...(product.bundle_content || {}), de: input.value, fr: product.bundle_content?.fr || '' };
      else if(field === 'bundle_content_fr') product.bundle_content = { ...(product.bundle_content || {}), de: product.bundle_content?.de || '', fr: input.value };
      else if(field === 'option_label_de') product.option_label = { ...(product.option_label || {}), de: input.value, fr: product.option_label?.fr || '' };
      else if(field === 'option_label_fr') product.option_label = { ...(product.option_label || {}), de: product.option_label?.de || '', fr: input.value };
      else if(field === 'quantity_options') product.quantity_options = bundleOptionsFromInput(input.value);
      else if(field === 'slotNumber') {
        const desired = Math.max(1, Number(input.value || product.slotNumber || 1));
        const currentIndex = index;
        const targetIndex = Math.min(products.length - 1, desired - 1);
        const [moved] = products.splice(currentIndex, 1);
        products.splice(targetIndex, 0, moved);
        products = reindexAdminProducts(products);
      }
      else if(field === 'name_de') product.name = { ...(product.name || {}), de: input.value, fr: product.name?.fr || input.value };
      else if(field === 'name_fr') product.name = { ...(product.name || {}), de: product.name?.de || '', fr: input.value };
      else product[field] = input.value;
      state.admin.products = field === 'slotNumber' ? products : products;
      state.admin.productsMessage = '';
      save();
      if(field === 'slotNumber' || field === 'slot_type') render();
    };
  });
  document.querySelectorAll('[data-image-upload-index]').forEach(input => {
    input.onchange = () => {
      const index = Number(input.getAttribute('data-image-upload-index'));
      const file = input.files && input.files[0];
      uploadAdminProductImage(index, file);
    };
  });
  document.querySelectorAll('[data-image-drop-index]').forEach(zone => {
    zone.addEventListener('dragover', (event) => {
      event.preventDefault();
      zone.classList.add('is-dragover');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('is-dragover'));
    zone.addEventListener('drop', (event) => {
      event.preventDefault();
      zone.classList.remove('is-dragover');
      const index = Number(zone.getAttribute('data-image-drop-index'));
      const file = event.dataTransfer?.files && event.dataTransfer.files[0];
      uploadAdminProductImage(index, file);
    });
  });
  const addBtn = document.getElementById('adminAddSlotBtn');
  if(addBtn) addBtn.onclick = ()=>addAdminSlot();
  document.querySelectorAll('[data-delete-slot]').forEach(btn => btn.onclick = ()=>deleteAdminSlot(Number(btn.getAttribute('data-delete-slot'))));
  const cards = Array.from(document.querySelectorAll('[data-draggable-slot]'));
  cards.forEach(card => {
    card.addEventListener('dragstart', (event) => {
      card.classList.add('dragging');
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', card.getAttribute('data-draggable-slot') || '0');
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      document.querySelectorAll('.admin-product-card').forEach(el => el.classList.remove('drag-over'));
    });
    card.addEventListener('dragover', (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      card.classList.add('drag-over');
    });
    card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
    card.addEventListener('drop', (event) => {
      event.preventDefault();
      const fromIndex = Number(event.dataTransfer.getData('text/plain'));
      const toIndex = Number(card.getAttribute('data-draggable-slot'));
      card.classList.remove('drag-over');
      moveAdminSlot(fromIndex, toIndex);
    });
  });
  const saveBtn = document.getElementById('adminSaveProductsBtn');
  if(saveBtn) saveBtn.onclick = ()=>saveAdminProducts();
}
function render(){
  if((state.route==='admin-orders' || state.route==='admin-order' || state.route==='admin-products' || state.route==='admin-design') && !state.admin.loggedIn){
    state.route = 'admin-login';
  }
  updateHash();
  let html='';
  if(state.route==='language') html=renderLanguage();
  if(state.route==='intro') html=renderIntro();
  if(state.route==='shop') html=renderMachine();
  if(state.route==='order') html=renderForm();
  if(state.route==='review') html=renderReview();
  if(state.route==='confirmation') html=renderConfirm();
  if(state.route==='admin-login') html=renderAdminLogin();
  if(state.route==='admin-orders') html=renderAdminOrders();
  if(state.route==='admin-order') html=renderAdminOrder();
  if(state.route==='admin-products') html=renderAdminProducts();
  if(state.route==='admin-design') html=renderAdminDesign();
  if(state.route==='page') html=renderContentPage();
  app.innerHTML=html;
  bindCommon();
  if(state.route==='intro') document.getElementById('toShopBtn').onclick=()=>setRoute('shop');
  if(state.route==='shop') bindMachine();
  if(state.route==='order') syncFormFields();
  if(state.route==='review') bindReview();
  if(state.route==='confirmation') bindConfirm();
  if(state.route==='admin-login') bindAdminLogin();
  if(state.route==='admin-orders') bindAdminOrders();
  if(state.route==='admin-order') bindAdminOrder();
  if(state.route==='admin-products') bindAdminProducts();
  if(state.route==='admin-design') bindAdminDesign();
  if(state.route==='page' && state.currentPageSlug==='kontakt') bindContact();
}
const initialHash = location.hash.replace('#','').split('?')[0];
if(['language','intro','shop','order','review','confirmation','admin-login','admin-orders','admin-order','admin-products','admin-design','page'].includes(initialHash)) {
  state.route=initialHash;
} else if(['grundidee','kontakt','agb'].includes(initialHash)) {
  state.currentPageSlug=initialHash; state.route='page';
} else if(!initialHash) {
  state.route='language';
}
(async()=>{
  await loadSiteContent();
  await loadCatalogProducts();
  if(state.route.startsWith('admin-')){
    await refreshAdminSession();
    if(!state.admin.loggedIn){
      state.route='admin-login';
    } else if(state.route==='admin-orders') {
      await loadAdminOrders();
      return;
    } else if(state.route==='admin-products') {
      await loadAdminProducts();
      return;
    } else if(state.route==='admin-design') {
      await loadAdminDesign();
      return;
    } else if(state.route==='admin-order') {
      const id = new URLSearchParams(location.search).get('id');
      if(id){
        await loadAdminOrder(id);
        return;
      }
      state.route='admin-orders';
      await loadAdminOrders();
      return;
    }
  }
  render();
})();
