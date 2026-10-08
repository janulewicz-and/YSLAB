import { defineStore } from 'pinia'
import type { Meta } from '../models/meta.model'

interface ExtendedWindow extends Window {
  __APP_CONFIG__: Meta
}

export const useMetaStore = defineStore('meta', {
  state: () => ({
    meta: null as Meta | null,
  }),

  getters: {
    getApiUrl(state) {
      return state.meta?.api.url
    },
    getAssetsBaseUrl(state) {
      return state.meta?.assetsBaseUrl ?? ''
    },
  },

  actions: {
    loadConfig() {
      this.meta = (window as unknown as ExtendedWindow).__APP_CONFIG__
    },
  },
})
