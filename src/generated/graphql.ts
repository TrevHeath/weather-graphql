export type Maybe<T> = T | null

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any

export type DateTime = any

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  weather?: Maybe<Weather>
}

export interface Weather {
  points?: Maybe<PointResultElement>
}

export interface PointResultElement {
  context?: Maybe<Json>

  id?: Maybe<string>

  type?: Maybe<string>

  geometry?: Maybe<Geomotry>

  properties?: Maybe<PointProperties>

  forecastZone?: Maybe<string>

  county?: Maybe<string>

  fireWeatherZone?: Maybe<string>

  timeZone?: Maybe<string>

  radarStation?: Maybe<string>
}

export interface Geomotry {
  type?: Maybe<string>

  coordinates?: Maybe<Coordinates>
}

export interface Coordinates {
  coordinates?: Maybe<(Maybe<string>)[]>
}

export interface PointProperties {
  id?: Maybe<string>

  type?: Maybe<string>

  cwa?: Maybe<string>

  forecastOffice?: Maybe<string>

  gridX?: Maybe<string>

  gridY?: Maybe<string>

  forecast?: Maybe<string>

  forecastHourly?: Maybe<string>

  forecastGridData?: Maybe<string>

  observationStations?: Maybe<string>

  relativeLocation?: Maybe<RelativeLocation>
}

export interface RelativeLocation {
  geometry?: Maybe<Geomotry>

  type?: Maybe<string>

  locationProperties?: Maybe<LocationProperties>
}

export interface LocationProperties {
  city?: Maybe<string>

  state?: Maybe<string>

  distance?: Maybe<Distance>

  bearing?: Maybe<Bearing>
}

export interface Distance {
  value?: Maybe<number>

  unitCode?: Maybe<string>
}

export interface Bearing {
  value?: Maybe<number>

  unitCode?: Maybe<string>
}

// ====================================================
// Arguments
// ====================================================

export interface PointsWeatherArgs {
  lat: string

  lng: string
}
