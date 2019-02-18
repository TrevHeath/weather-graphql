import { RequestService } from './APIClient'
import {
  FilterOptions,
  SearchParams,
  SearchCoordinate,
  ResultElement,
} from './interfaces'

export class WeatherModel extends RequestService {
  constructor() {
    super()
  }
  addFilterParams(q: string, filters: FilterOptions) {
    const filterString: string = Object.keys(filters)
      .map((key) => {
        if (filters[key] instanceof Array) {
          const keyVals = filters[key].map((k: string) => k)
          ;`${key}:${keyVals.join(',')}`
          return keyVals
        }
        return key + ':' + filters[key]
      })
      .join('+')
    console.log('filterString', filterString)
    return `q=${q}+${filterString}`
  }
  async formatSearchParams(args: {
    query: string
    options?: SearchParams
    filters?: FilterOptions
  }) {
    const { query } = args
    let q: string

    if (args.filters) {
      q = this.addFilterParams(query, args.filters)
    } else {
      q = query
    }
    const params = await this.createParams({
      q,
      ...args.options,
    })
    return params
  }

  async points(args: {
    query: string
    options?: SearchParams
    filters?: FilterOptions
  }): Promise<SearchCoordinate> {
    try {
      const params = await this.formatSearchParams(args)
      const results = await this.weather.get(`/points?${params}`)
      return {
        ...results.data,
        results: results,
      }
    } catch (e) {
      console.log(e)
      return e
    }
  }

  async forecast(args: {
    query: string
    options?: SearchParams
    filters?: FilterOptions
  }): Promise<ResultElement[]> {
    try {
      const params = await this.formatSearchParams(args)
      const suggestions = await this.weather.get(
        `/search/suggestions?${params}`
      )
      return suggestions
    } catch (e) {
      console.log(e)
      return e
    }
  }
}
