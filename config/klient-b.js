// Client B investment config (config injected into window).
// Investment launched in 2021, the config has not been touched since.
// This is the client the PM reported the problem for.

window.__APP_CONFIG__ = {
  name: 'Park Zachodni',
  assetsBaseUrl: 'https://klient-b.cdn.example.io/assets',

  api: {
    url: 'https://api.example.io/v2',
    investmentId: 127,
    additionalFields: [],
  },

  settings: {
    showCompanyLogo: false,
    defaultAreaUnit: 'm2',
    currencyFormatter: new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      maximumFractionDigits: 0,
    }),
  },

  filters: {
    status: {
      enabledStatuses: ['available', 'booked'],
    },
    area: {
      show: true,
      withDecimals: false,
    },
  },

  apps: {},

  buildings: [{ name: 'Budynek 1', mappingName: 'PZ', floors: 3 }],
}
