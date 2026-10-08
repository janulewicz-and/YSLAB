import type { ApartmentStatus } from './apartment.model'

/**
 * Shape of the `window.__APP_CONFIG__` object.
 *
 * Fields marked with `?` are optional. Not every investment has them: some configs were
 * written years ago and nobody has filled them in since.
 */
export interface Meta {
  name: string
  assetsBaseUrl: string
  api: MetaApi
  settings: MetaSettings
  filters: MetaFilters
  apps: MetaApps
  buildings: Array<MetaBuilding>
}

export interface MetaApi {
  url: string
  investmentId: number
  additionalFields: Array<string>
}

export interface MetaSettings {
  /** Whether apartment prices are shown anywhere in the app. */
  showPrice?: boolean
  showCompanyLogo: boolean
  defaultAreaUnit: 'm2' | 'ft2'
  currencyFormatter: Intl.NumberFormat
}

export interface MetaFilters {
  status: {
    /** Statuses this client shows at all. */
    enabledStatuses: Array<ApartmentStatus>
  }
  area: {
    show: boolean
    withDecimals: boolean
  }
}

export interface MetaApps {
  /** Apartment gallery config. Not every client has this feature. */
  apartmentGallery?: {
    enabled: boolean
    /** map of apartment name to floor plan file path */
    plans: Record<string, string>
  }
}

export interface MetaBuilding {
  name: string
  mappingName: string
  floors: number
}
