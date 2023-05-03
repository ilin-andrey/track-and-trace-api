## Description

Technical task as a part of interview process. Full task definition was not provided intentionally.

### Task definition

Task is to create a backend API that serves shipment data and provides current weather conditions at user's location.

Use data from `assets/seed.csv` as initial set of data for this task.

### Questions

- What does mean `weather for users location`?
- Not clear about requirement for status of shipments. Do we need it?
- Why zip codes and locations don't have match in some records in initial dataset?

### Solution

Solution is based on given task definition and `csv` file.
The idea was to create multiple entities in relational database, like:

- `artcile` - article information with price
- `carrier` - carrier information
- `shipment` - information about shipments, and potentially with state, if needed
- `many-2-many-articles-shipments` - `csv` file describes such model of relations, plus this table contains `quantity` information for each article in each shipment

Weather information can be fetched on the fly for each location. There are a lot of ways to optimize this process but I chose in-memory cache with TTL. With the given solution it is not problem to connect third party key-value storages like `Redis` for this cache.

For `status` of the shipment we can add additional field to our `shipment` entity and update it based on changes in delivery process. All changes can be stored as events separately in RDMS or NoSQL storage depends on requirements.

### Folder Structure

`assets/` - static files  
`config/` - config files for nest.js  
`prisma/` - prisma related stuff  
`src/`  
⋅⋅⋅`middleware/` - middleware  
⋅⋅⋅`pipes/` - nestjs pipes for transformation and validation  
⋅⋅⋅`resources/` - core components of the nestjs app  
`test` - e2e tests

### API specifications

`GET /articles/{SKU}` - article details for the given `SKU`, where `SKU` is the Stock Keeping Unit of the article  
`POST /articles` - create a new article

`GET /carriers` - list of supported carriers

`GET /weather/{ZIP}` - weather details for the given location as is from external service, `ZIP` is the zip code of location

`GET /shipments/{TRACKING_NUMBER}` - all shipment details with (if available) the current weather information about destination location, `TRACKING_NUMBER` is a tracking number

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
