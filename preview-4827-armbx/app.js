
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
    adminImageUrl: 'Bild-URL (später)',
    adminNoProducts: 'Noch keine Produkte vorhanden.',
    adminCatalogLoadError: 'Produkte konnten nicht geladen werden.',
    adminSlotType: 'Slot-Typ',
    adminSlotTypeNormal: 'Normaler Slot',
    adminSlotTypeBundle: 'Abo / Fresspäckli',
    adminBundleContent: 'Inhalt / Beschreibung',
    adminBundleOptions: 'Optionen pro Woche (z. B. 2,3,4)',
    slotInfo: 'Inhalt',
    slotWeeklyChoice: 'Pro Woche',
    slotAddBundle: 'Abo hinzufügen',
    slotChooseOption: 'Option wählen',
    slotInfoTitle: 'Inhalt des Fresspäckli',
    close: 'Schliessen'
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
    adminImageUrl: 'URL image (plus tard)',
    adminNoProducts: 'Aucun produit disponible.',
    adminCatalogLoadError: 'Impossible de charger les produits.',
    adminSlotType: 'Type de slot',
    adminSlotTypeNormal: 'Slot normal',
    adminSlotTypeBundle: 'Abonnement / paquet',
    adminBundleContent: 'Contenu / description',
    adminBundleOptions: 'Options par semaine (p. ex. 2,3,4)',
    slotInfo: 'Contenu',
    slotWeeklyChoice: 'Par semaine',
    slotAddBundle: 'Ajouter abonnement',
    slotChooseOption: 'Choisir',
    slotInfoTitle: 'Contenu du paquet',
    close: 'Fermer'
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
    filter: 'all'
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

function parseBundleMeta(row){
  const base = { slot_type: 'normal', content: String(row?.description_de || ''), quantity_options: [2,3,4] };
  const raw = String(row?.description_fr || '');
  if(raw.startsWith(META_PREFIX)){
    try{
      const meta = JSON.parse(raw.slice(META_PREFIX.length));
      const options = Array.isArray(meta?.quantity_options) ? meta.quantity_options.map((value)=>Number(value)).filter((value)=>Number.isFinite(value) && value > 0) : base.quantity_options;
      return {
        slot_type: meta?.slot_type === 'bundle' ? 'bundle' : 'normal',
        content: String(meta?.content ?? base.content ?? ''),
        quantity_options: options.length ? options : base.quantity_options
      };
    }catch(_){ }
  }
  return base;
}
function encodeBundleMeta(product){
  return `${META_PREFIX}${JSON.stringify({
    slot_type: product.slot_type === 'bundle' ? 'bundle' : 'normal',
    content: String(product.bundle_content || ''),
    quantity_options: (Array.isArray(product.quantity_options) ? product.quantity_options : []).map((value)=>Number(value)).filter((value)=>Number.isFinite(value) && value > 0)
  })}`;
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
  if(!product) return;
  const multiplier = selectedBundleMultiplier(product);
  state.cart.push({ productId: String(product.id), kind: 'bundle', multiplier });
  save(); render();
}
function cycleBundleOption(productId){
  const product = currentProducts().find((item)=>String(item.id)===String(productId));
  if(!product || product.slot_type !== 'bundle') return;
  const options = Array.isArray(product.quantity_options) && product.quantity_options.length ? product.quantity_options : [2,3,4];
  const current = selectedBundleMultiplier(product);
  const index = options.indexOf(current);
  state.bundleSelections[product.id] = options[(index + 1) % options.length];
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
    slot_type: meta.slot_type,
    bundle_content: meta.content,
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
    bundle_content: '',
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
    }
  }catch(error){
    state.catalog.error = error?.message || '';
  }finally{
    state.catalog.loading = false;
    save();
    render();
  }
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
      slot_type: product.slot_type === 'bundle' ? 'bundle' : 'normal',
      bundle_content: product.bundle_content || '',
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
      qtyLabel: kind === 'bundle' ? `${multiplier}x / ${t('slotWeeklyChoice')}` : ''
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
  const map={language:'#language',intro:'#intro',shop:'#shop',order:'#order',review:'#review',confirmation:'#confirmation','admin-login':'#admin-login','admin-orders':'#admin-orders','admin-order':'#admin-order','admin-products':'#admin-products'};
  if(state.route==='admin-order'){
    const id = state.admin.currentOrder?.id || new URLSearchParams(location.search).get('id') || '';
    const target = `#admin-order${id ? `?id=${encodeURIComponent(id)}` : ''}`;
    if(`${location.hash}`!==target) history.replaceState(null,'',target);
    return;
  }
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
  if(['language','intro','shop','order','review','confirmation','admin-login','admin-orders','admin-order','admin-products'].includes(h)){
    state.route=h;
    if(h==='admin-order'){
      const id = new URLSearchParams(location.search).get('id');
      if(id) loadAdminOrder(id);
    }
    render();
  }
});
function onSelectProduct(id){ const product = currentProducts().find((item)=>String(item.id)===String(id)); if(!product) return; if(product.slot_type==='bundle'){ addBundleProduct(id); return; } state.cart.push(id); save(); render(); }
function removeOne(id){ const key = String(id); const idx = state.cart.findIndex((entry)=>cartEntryKey(entry)===key || String(cartEntryProductId(entry))===key); if(idx>-1) state.cart.splice(idx,1); save(); render(); }

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
        <div class="modal-content">${escapeHtml(product.bundle_content || '').replace(/\n/g,'<br>')}</div>
      </div>
    </div>`;
}

function renderMachine(){
  const grouped=cartGrouped();
  return `
  <div class="topbar"><img src="../public/logo.png" alt="ARMEEBOX"></div>
  <div class="page">
    <div class="shell">
      <div class="header-row"><h1>${t('machineTitle')}</h1></div>
      <div class="machine"><div class="machine-red"><div class="machine-inner">
        <div class="machine-banner">${t('machineInner')}</div>
        <div><div class="grid">
          ${currentProducts().map(p=>{
            const isBundle = p.slot_type === 'bundle';
            const currentMultiplier = isBundle ? selectedBundleMultiplier(p) : 1;
            const optionLabel = isBundle ? `${currentMultiplier}x` : '';
            const displayName = p.name[state.lang];
            const displayPriceValue = displayPrice(p);
            return `
          <button class="slot ${isBundle ? 'slot-bundle' : ''}" data-id="${p.id}">
            <div class="slot-top">
              <div class="img-placeholder">SPÄTER BILD</div>
              <div class="spirals">◜◜◜</div>
            </div>
            <div class="price">${money(displayPriceValue)}</div>
            <div class="namebar ${isBundle ? 'namebar-bundle' : ''}" title="${escapeAttr(displayName)}">
              ${isBundle ? `<button class="slot-mini-btn" type="button" data-slot-info="${p.id}">i</button>` : ''}
              <span class="namebar-text">${displayName}</span>
            </div>
            <div class="select-light ${isBundle ? 'select-light-bundle' : ''}">
              ${isBundle ? `<button class="slot-mini-btn slot-option-btn" type="button" data-slot-option="${p.id}">${optionLabel}</button>` : '<span></span>'}
            </div>
          </button>`;
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
                <div><strong>${item.name[state.lang]}</strong>${item.kind==='bundle' ? `<div class="cart-subnote">${item.multiplier}x / ${t('slotWeeklyChoice')}</div>` : ''}<div>x${item.qty}</div></div>
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
  <div class="topbar"><img src="../public/logo.png" alt="ARMEEBOX"></div>
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
  <div class="topbar"><img src="../public/logo.png" alt="ARMEEBOX"></div>
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
  <div class="topbar"><img src="../public/logo.png" alt="ARMEEBOX"></div>
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
  <div class="topbar"><img src="../public/logo.png" alt="ARMEEBOX"></div>
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
  <div class="topbar"><img src="../public/logo.png" alt="ARMEEBOX"></div>
  <div class="page">
    <div class="shell">
      <div class="admin-toolbar">
        <div><h1 style="margin:0;font-size:48px">${t('adminOrders')}</h1><div class="note">${t('adminListHint')}</div></div>
        <div class="admin-actions">
          <button class="back-btn" id="adminProductsBtn">${t('adminProducts')}</button>
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
    <div class="topbar"><img src="../public/logo.png" alt="ARMEEBOX"></div>
    <div class="page"><div class="shell"><div class="note">Bestellung wird geladen …</div></div></div>`;
  }
  const meta = order.order_meta || {};
  const itemsHtml = (order.items || []).map(item => `
    <div class="summary-line"><span>${escapeHtml(item.product_name || '-')} x${escapeHtml(item.quantity || 1)}</span><strong>${money(item.total_price ?? item.line_total_chf ?? item.unit_price ?? item.unit_price_chf ?? 0)}</strong></div>`).join('');
  const barracksAddr = Array.isArray(meta.barracksAddress) ? meta.barracksAddress.filter(Boolean).join('<br>') : '';
  return `
  <div class="topbar"><img src="../public/logo.png" alt="ARMEEBOX"></div>
  <div class="page">
    <div class="shell">
      <div class="admin-toolbar">
        <div><h1 style="margin:0;font-size:44px">${t('adminDetails')}</h1><div class="note">${escapeHtml(order.order_number || '-')}</div></div>
        <div class="admin-actions">
          <button class="back-btn" id="adminBackToOrders">${t('adminBackList')}</button>
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
}
function bindMachine(){
  document.querySelectorAll('.slot').forEach(el=>el.onclick=()=>onSelectProduct(el.dataset.id));
  document.querySelectorAll('[data-remove]').forEach(el=>el.onclick=(e)=>{ e.stopPropagation(); removeOne(el.dataset.remove); });
  document.querySelectorAll('[data-slot-info]').forEach(el=>el.onclick=(e)=>{ e.stopPropagation(); openSlotInfo(el.getAttribute('data-slot-info')); });
  document.querySelectorAll('[data-slot-option]').forEach(el=>el.onclick=(e)=>{ e.stopPropagation(); cycleBundleOption(el.getAttribute('data-slot-option')); });
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
      product_name: item.kind === 'bundle' ? `${item.name[state.lang]} (${item.multiplier}x / ${t('slotWeeklyChoice')})` : item.name[state.lang],
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

function renderAdminProducts(){
  const products = adminProductsList();
  return `
  <div class="topbar"><img src="../public/logo.png" alt="ARMEEBOX"></div>
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
            <div class="field"><label>${t('adminProductName')}</label><input data-product-field="name" data-product-index="${index}" value="${escapeAttr(product.name?.de || '')}"></div>
            <div class="admin-product-row">
              <div class="field"><label>${t('adminPrice')}</label><input data-product-field="price" data-product-index="${index}" type="number" min="0" step="0.05" value="${escapeAttr(String(product.price ?? 0))}"></div>
              <div class="field admin-active-field"><label>${t('adminActive')}</label><label class="admin-toggle"><input data-product-field="active" data-product-index="${index}" type="checkbox" ${product.active !== false ? 'checked' : ''}><span>${product.active !== false ? 'On' : 'Off'}</span></label></div>
            </div>
            <div class="field bundle-only ${product.slot_type === 'bundle' ? '' : 'is-hidden'}"><label>${t('adminBundleContent')}</label><textarea data-product-field="bundle_content" data-product-index="${index}">${escapeHtml(product.bundle_content || '')}</textarea></div>
            <div class="field bundle-only ${product.slot_type === 'bundle' ? '' : 'is-hidden'}"><label>${t('adminBundleOptions')}</label><input data-product-field="quantity_options" data-product-index="${index}" value="${escapeAttr((product.quantity_options || [2,3,4]).join(','))}"></div>
            <div class="field"><label>${t('adminImageUrl')}</label><input data-product-field="image_url" data-product-index="${index}" value="${escapeAttr(product.image_url || '')}"></div>
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
      else if(field === 'bundle_content') product.bundle_content = input.value;
      else if(field === 'quantity_options') product.quantity_options = bundleOptionsFromInput(input.value);
      else if(field === 'slotNumber') {
        const desired = Math.max(1, Number(input.value || product.slotNumber || 1));
        const currentIndex = index;
        const targetIndex = Math.min(products.length - 1, desired - 1);
        const [moved] = products.splice(currentIndex, 1);
        products.splice(targetIndex, 0, moved);
        products = reindexAdminProducts(products);
      }
      else if(field === 'name') product.name = { de: input.value, fr: input.value };
      else product[field] = input.value;
      state.admin.products = field === 'slotNumber' ? products : products;
      state.admin.productsMessage = '';
      save();
      if(field === 'slotNumber' || field === 'slot_type') render();
    };
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
  if((state.route==='admin-orders' || state.route==='admin-order' || state.route==='admin-products') && !state.admin.loggedIn){
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
}
const initialHash = location.hash.replace('#','').split('?')[0];
if(['language','intro','shop','order','review','confirmation','admin-login','admin-orders','admin-order','admin-products'].includes(initialHash)) {
  state.route=initialHash;
} else if(!initialHash) {
  state.route='language';
}
(async()=>{
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
