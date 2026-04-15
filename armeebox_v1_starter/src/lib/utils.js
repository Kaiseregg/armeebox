export const money = (value) => new Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF' }).format(Number(value || 0))
export const slugTitle = (slug) => ({ agb:'AGB', grundidee:'Grundidee', kontakt:'Kontakt' }[slug] || slug)
export const ranks = ['Rekrut (Rekr)','Soldat (Sdt)','Gefreiter (Gfr)','Obergefreiter (Obgfr)','Korporal (Kpl)','Wachtmeister (Wm)','Oberwachtmeister (Obwm)','Fourier (Four)','Hauptfeldweibel (Hptfw)','Leutnant (Lt)','Oberleutnant (Oblt)','Hauptmann (Hptm)']
