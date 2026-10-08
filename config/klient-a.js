// Client A investment config (config injected into window).
// The apartment list works fine for this client.

window.__APP_CONFIG__ = {
  name: 'Osiedle Słoneczne',
  assetsBaseUrl: 'https://klient-a.cdn.example.io/assets',

  api: {
    url: 'https://api.example.io/v2',
    investmentId: 418,
    additionalFields: ['balcony_area', 'world_side'],
  },

  settings: {
    showPrice: true,
    showCompanyLogo: true,
    defaultAreaUnit: 'm2',
    currencyFormatter: new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      maximumFractionDigits: 0,
    }),
  },

  filters: {
    status: {
      enabledStatuses: ['available', 'booked', 'sold'],
    },
    area: {
      show: true,
      withDecimals: true,
    },
  },

  apps: {
    apartmentGallery: {
      enabled: true,
      plans: {
        'A-1-01': 'plans/a-1-01.png',
        'A-1-02': 'plans/a-1-02.png',
        'B-2-14': 'plans/b-2-14.png',
      },
    },
  },

  buildings: [
    { name: 'Budynek A', mappingName: 'A', floors: 4 },
    { name: 'Budynek B', mappingName: 'B', floors: 5 },
  ],
}
