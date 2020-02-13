# Quick start to API development with [Fastify](https://fastify.io) and [GraphQL](https://github.com/apollographql/apollo-server)

The project uses [TypeScript](https://typescriptlang.org) to fully leverage on it's intellisense and type checks

## Folder structure

```
|-- certs
|   |-- jwtRS256.key
|   |-- jwtRS256.key.pub
|   |-- mqtt-certificate.crt
|   `-- mqtt-certificate.key
|-- datamodel.graphql
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
|   |   `-- www.ts
|   |-- configs
|   |   `-- index.ts
|   |-- index.ts
|   |-- libraries
|   |   `-- MQTT.ts
|   |-- middlewares
|   |   `-- index.ts
|   |-- mutations
|   |   |-- Authors.ts
|   |   |-- index.ts
|   |   `-- Posts.ts
|   |-- permissions
|   |   `-- index.ts
|   |-- prisma
|   |   |-- index.ts
|   |   `-- prisma-schema.ts
|   |-- resolvers
|   |   |-- Authors.ts
|   |   |-- index.ts
|   |   `-- Posts.ts
|   |-- schemas
|   |   `-- index.ts
|   |-- @types
|   |   `-- index.ts
|   `-- utils
|       |-- Email.ts
|       |-- index.ts
|       `-- Token.ts
|-- __tests__
|   `-- index.jest.ts
|-- tsconfig.json
|-- tslint.json
`-- yarn.lock
```

## Getting started

Before you continure, ensure you have [Node.js](https://nodejs.org/en/download/) and [Yarn Pkg](https://yarnpkg.com/getting-started/install), an alternative to [npm](https://www.npmjs.com/get-npm). But both should work just right.
