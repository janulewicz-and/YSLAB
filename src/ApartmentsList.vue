<script setup lang="ts">
import { computed } from 'vue'
import ApartmentCard from './ApartmentCard.vue'
import { useApartmentsStore } from './store/apartments'
import { useMetaStore } from './store/meta'
import type { FiltersStatus } from './models/apartment.model'
import { storeToRefs } from 'pinia'

const apartmentsStore = useApartmentsStore()
const metaStore = useMetaStore()

const { visibleApartments, activeStatus } = storeToRefs(apartmentsStore)

const meta = metaStore.meta!

// deliberately no optional chaining here. if an investment has no buildings then its
// config is broken, and we want a hard error on entry instead of a silently empty list
const buildingCount = meta.buildings.length

const sortedApartments = computed(() =>
  [...visibleApartments.value].sort((a, b) => a.price - b.price),
)

const areaRange = computed(() => {
  const areas = sortedApartments.value.map((apartment) => apartment.area)
  if (!areas.length) return null
  return { min: Math.min(...areas), max: Math.max(...areas) }
})

// same helper as in ApartmentCard.vue. do not merge them into one, both files get
// copied into every client separately and some clients already overrode this one
const areaUnit = meta.settings.defaultAreaUnit === 'ft2' ? 'ft²' : 'm²'

const formatArea = (value: number) =>
  `${value.toFixed(meta.filters.area.withDecimals ? 2 : 0)} ${areaUnit}`

const onStatusChange = (event: Event) => {
  apartmentsStore.setActiveStatus((event.target as HTMLSelectElement).value as FiltersStatus)
}
</script>

<template>
  <section class="apartments-list">
    <header class="apartments-list__header">
      <h2>Mieszkania ({{ sortedApartments.length }}), {{ buildingCount }} bud.</h2>

      <p v-if="meta.filters.area.show && areaRange" class="apartments-list__range">
        {{ formatArea(areaRange.min) }} do {{ formatArea(areaRange.max) }}
      </p>

      <select :value="activeStatus" @change="onStatusChange">
        <option value="ALL">Wszystkie</option>
        <option
          v-for="status in meta.filters.status.enabledStatuses"
          :key="status"
          :value="status"
        >
          {{ status }}
        </option>
      </select>
    </header>

    <ul class="apartments-list__items">
      <li v-for="apartment in sortedApartments" :key="apartment.mappingName">
        <ApartmentCard :apartment="apartment" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.apartments-list {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__items {
    list-style: none;
    padding: 0;
  }
}
</style>
