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
