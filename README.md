# Quick start to API development with [Fastify](https://fastify.io) and [GraphQL](https://github.com/apollographql/apollo-server)

The project uses [TypeScript](https://typescriptlang.org) to fully take advantage of intellisense and type checks

## Folder structure

```
.
|-- datamodel.graphql
|-- dist
|   |-- bin
|   |-- index.js
|   |-- index.js.map
|   |-- middlewares
|   |-- mutations
|   |-- prisma
|   |-- resolvers
|   |-- schemas
|   `-- @types
|-- docker-compose.yml
|-- graphql
|   |-- mutations.graphql
|   |-- queries.graphql
|   `-- schema.graphql
|-- jest.config.js
|-- package.json
|-- prisma.yml
|-- README.md
|-- src
|   |-- bin
|   |-- index.ts
|   |-- middlewares
|   |-- mutations
|   |-- prisma
|   |-- resolvers
|   |-- schemas
|   `-- @types
|-- __tests__
|   `-- index.jest.ts
|-- tsconfig.json
|-- tslint.json
`-- yarn.lock
```

## Getting started

Before you continure, ensure you have [Node.js](https://nodejs.org/en/download/) and [Yarn Pkg](https://yarnpkg.com/getting-started/install), an alternative to [npm](https://www.npmjs.com/get-npm). But both should work just right.
