import { ApolloServer } from 'apollo-server'
import { schema } from './resolvers'

import { WeatherApiModel } from './models/WeatherApiModel'

const server = new ApolloServer({
  schema,
  // context: (req) => ({
  //   ...req,
  //   weather: new WeatherApiModel(),
  // }),
  tracing: process.env.DEPSAUCE_APP_STAGE === 'production' ? false : true,
  // engine: {
  //   apiKey: process.env.DEPSAUCE_ENGINE_API_KEY,
  //   schemaTag: process.env.DEPSAUCE_ENGINE_SCHEMA_TAG,
  // },
})
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
