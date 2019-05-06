import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { ApolloServer, gql } from 'apollo-server';

import { makeExecutableSchema } from 'graphql-tools';
import { graphql } from 'graphql';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';
// import { loaders } from './graphql/loaders/loaders';

const server = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers,
  cors: true,
  context: {
    // loaders: loaders(),
  },
});

createConnection().then(connection => {
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
});
