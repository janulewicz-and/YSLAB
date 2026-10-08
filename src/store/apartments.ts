import { defineStore } from 'pinia'
import { useMetaStore } from './meta'
import type { Apartment, FiltersStatus } from '../models/apartment.model'

export const useApartmentsStore = defineStore('apartments', {
  state: () => ({
    apartments: [] as Array<Apartment>,
    activeStatus: 'ALL' as FiltersStatus,
  }),

  getters: {
    /**
     * Apartments visible on the list.
     *
     * The first filter is the global gate: the client decides in the config which statuses
     * we show at all (some of them do not want sold ones listed). The second filter is
     * whatever the user picked in the select.
     */
    visibleApartments(state): Array<Apartment> {
      const metaStore = useMetaStore()
      const enabledStatuses = metaStore.meta?.filters.status.enabledStatuses ?? []

      return state.apartments
        .filter((apartment) => enabledStatuses.includes(apartment.status))
        .filter(
          (apartment) =>
            state.activeStatus === 'ALL' || apartment.status === state.activeStatus,
        )
    },
  },

  actions: {
    setActiveStatus(status: FiltersStatus) {
      this.activeStatus = status
    },

    async fetchApartments() {
      const metaStore = useMetaStore()
      const response = await fetch(`${metaStore.meta?.api.url}/apartments`)
      this.apartments = await response.json()
    },
  },
})
