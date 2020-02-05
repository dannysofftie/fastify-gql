# Quick start to API development with [Fastify](https://fastify.io) and [GraphQL](https://github.com/apollographql/apollo-server)

The project uses [TypeScript](https://typescriptlang.org) to fully take advantage of intellisense and type checks

## Folder structure

```
|-- jest.config.js
|-- package.json
|-- prisma
|-- README.md
|-- src
|   |-- bin
|   |   `-- www.ts
|   |-- index.ts
|   |-- middlewares
|   |   `-- index.ts
|   |-- mutations
|   |   |-- Authors.ts
|   |   |-- index.ts
|   |   `-- Posts.ts
|   |-- mutations.graphql
|   |-- queries.graphql
|   |-- resolvers
|   |   |-- Authors.ts
|   |   |-- index.ts
|   |   `-- Posts.ts
|   |-- schemas
|   |   `-- index.ts
|   |-- schemas.graphql
|   `-- @types
|       `-- index.ts
|-- tsconfig.json
|-- tslint.json
`-- yarn.lock
```

## Getting started

Before you continure, ensure you have [Node.js](https://nodejs.org/en/download/) and [Yarn Pkg](https://yarnpkg.com/getting-started/install), an alternative to [npm](https://www.npmjs.com/get-npm). But both should work just right.
