<h1 align="center"><strong>Weather.gov Graphql API - WIP</strong></h1>

<br />

<div align="center"><img src="https://imgur.com/1MfnLVl.png" /></div>

<div align="center"><strong>🚀 Query Weather forecasts and information straight from weather.gov using GraphQL!</strong></div>
<div align="center">GraphQL API for Weather.gov - based on best practices from the GraphQL community.</div>


## Getting started

```sh
# 1. Clone this repo
git clone https://github.com/trevheath/weather-graphql.git

# 2. Navigate to the new project
cd weather-graphql

# 3 Install Dependencies
yarn
# ---- or ----
npm i

# 4. Start server (runs on http://localhost:4000) and open GraphQL Playground
yarn dev
# ---- or ----
npm run dev
```

![](https://imgur.com/hElq68i.png)

## Documentation

- WIP

<a>https://www.weather.gov/documentation/services-web-api#/</a>

### Commands

- `yarn start` starts GraphQL server on `http://localhost:4000`
- `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground
- `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
- `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

> **Note**: We recommend that you're using `yarn dev` during development as it will give you access to the GraphQL API or your server (defined by the [application schema](./src/schema.graphql)) as well as to the Prisma API directly (defined by the [Prisma database schema](./generated/prisma.graphql)). If you're starting the server with `yarn start`, you'll only be able to access the API of the application schema.

### Project structure

## Contributing

This library is being maintained by the GraphQL community, with official support from the [Novvum](https://www.novvum.io) team.

Your feedback is **very helpful**, please share your opinion and thoughts! If you have any questions or want to contribute yourself, feel free to reach out to us!
