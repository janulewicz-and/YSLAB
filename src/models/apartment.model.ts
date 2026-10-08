export type ApartmentStatus = 'available' | 'booked' | 'sold'

export type FiltersStatus = ApartmentStatus | 'ALL'

export interface Apartment {
  /** Unique apartment name, used as the key everywhere in the app. */
  mappingName: string
  status: ApartmentStatus
  /** Area in the unit given by `settings.defaultAreaUnit`. */
  area: number
  price: number
  rooms: number
  floor: number
}
