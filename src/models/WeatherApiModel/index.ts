import { WeatherModel } from './WeatherModel'
// import { PackageModel } from './PackageModel'

export class WeatherApiModel {
  public readonly api

  constructor() {
    this.api = {
      weather: new WeatherModel(),
      // pkg: new PackageModel(),
    }
  }
}
