## Description

Technical task as a part of interview process. Full task definition was not provided intentionally.

### Task definition

Task is to create a backend API that serves shipment data and provides current weather conditions at user's location.

Use data from `assets/seed.csv` as initial set of data for this task.

### Questions

- What does mean `weather for users location`?
- Not clear about requirement for status of shipments. Do we need it?
- Why zip codes and locations don't have match in some records in initial dataset?

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database

This project uses [Prisma](https://www.prisma.io/) library to interact with databases and [Postgres](https://www.postgresql.org/) as database.

Do the following to enable database:

1. create `.env` file in the root folder:

```
DATABASE_URL=<put here URI to your postgres database in the following format "postgresql://postgres:@localhost:5432/postgres">
```

2. run `npx prisma migrate dev` to create a database and seed initial data

## Weather information

This app uses free plan of [OpenWeatherMap](https://openweathermap.org/) service for weather information.

Do the following to enable weather information:

1. update `WEATHER_API_KEY` value in `config/.env.local`

## Links

- [Nest.js](https://github.com/nestjs/nest)
- [Postgres](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [OpenWeatherMap](https://openweathermap.org/)
