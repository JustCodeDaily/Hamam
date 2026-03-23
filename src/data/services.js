// Services and pricing data
export const services = [
  {
    id: 'hamam-packages',
    title: 'Hamam Pakete',
    services: [
      {
        name: 'Hamam Spartarif',
        duration: 'ca. 15 Min. Anwendung (2 Std. Aufenthalt)',
        price: 'Ab 160 € für 4 Personen',
        includes: [
          'Sauna (Textilsauna)',
          'Ganzkörper Peeling',
          'Waschung (ohne Schaum)',
        ],
        note: 'Weitere Personen +40 €',
      },
      {
        name: 'Hamam Klassisch',
        duration: 'ca. 30 Min. Anwendung (2 Std. Aufenthalt)',
        prices: [
          { label: '1 Person', price: '75 €' },
          { label: '2 Personen', price: '150 €' },
          { label: '3 Personen', price: '220 €' },
          { label: '4 Personen', price: '280 € (70 € p.P.)' },
          { label: '8 Personen', price: '520 € (65 € p.P.)' },
          { label: '10 Personen', price: '600 € (60 € p.P.)' },
        ],
        includes: [
          'Sauna (Textilsauna)',
          'Ganzkörper Peeling',
          'Traditionelle Hamam-Waschung',
          'Schaummassage',
        ],
      },
    ],
  },
  {
    id: 'oil-massages',
    title: 'Öl-Massagen',
    services: [
      {
        name: 'Mandelöl-Massage',
        type: 'Ganzkörper Mandelöl-Massage',
        prices: [
          { label: '30 Min.', price: '30 €' },
          { label: '60 Min.', price: '65 €' },
          { label: '90 Min.', price: '100 €' },
        ],
        note: 'Bitte extra Tücher für Massagetisch mitbringen',
      },
    ],
  },
  {
    id: 'custom-package',
    title: 'Individuelles Paket — Gestalte dein Hamam',
    services: [
      {
        name: 'Bausteine',
        items: [
          { name: 'Sauna & Dampfsauna (Vorerwärmung)', duration: '45 Min.', price: '15 €' },
          { name: 'Ganzkörper Peeling', duration: '15 Min.', price: '30 €' },
          { name: 'Schaum Massage', duration: '15 Min.', price: '30 €' },
          { name: 'Extra Massage im Hamam (Kaffee oder Schaum)', duration: '15 Min.', price: '30 €' },
          { name: 'Wellness Massage', duration: '30 Min.', price: '30 €' },
          { name: '+1 Std. Extra Privatzeit (Ruhen ohne Fremde)', duration: '1 Std.', price: '50 €' },
        ],
      },
    ],
  },
];
