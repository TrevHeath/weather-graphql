import { Context } from '../utils/getContext'

export const Weather = {
  async points(_, args, ctx: Context, info) {
    const points = await ctx.weather.api.search.req({
      ...args,
    })
    return points
  },
}
