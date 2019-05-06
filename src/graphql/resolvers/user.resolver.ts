import { ResolverMap } from '../graphql-utils';

const resolvers: ResolverMap = {
  Mutation: {
    register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {

    },
  },
};
export default resolvers;
