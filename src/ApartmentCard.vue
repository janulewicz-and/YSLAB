<script setup lang="ts">
import { computed } from 'vue'
import { useMetaStore } from './store/meta'
import type { Apartment } from './models/apartment.model'

const props = defineProps<{ apartment: Apartment }>()

const metaStore = useMetaStore()

const meta = metaStore.meta!

const showPrice = computed(() => meta.settings.showPrice)

const planUrl = computed(
  () => `${meta.assetsBaseUrl}/${meta.apps.apartmentGallery.plans[props.apartment.mappingName]}`,
)

const formatPrice = (value: number) => meta.settings.currencyFormatter.format(value)

// same helper as in ApartmentsList.vue. do not merge them into one, both files get
// copied into every client separately and some clients already overrode this one
const formatArea = (value: number) =>
  `${value.toFixed(meta.filters.area.withDecimals ? 2 : 0)} m²`
</script>

<template>
  <article class="apartment-card">
    <img :src="planUrl" :alt="apartment.mappingName" />

    <span class="apartment-card__name">{{ apartment.mappingName }}</span>
    <span class="apartment-card__area">{{ formatArea(apartment.area) }}</span>
    <span class="apartment-card__floor">{{ apartment.floor }}. piętro</span>
    <span v-if="showPrice" class="apartment-card__price">
      {{ formatPrice(apartment.price) }}
    </span>
  </article>
</template>

<style lang="scss" scoped>
.apartment-card {
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>
