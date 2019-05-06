export interface ResolverMap {
  [key: string]: {
    [key: string]: (parent, any, context: {}, info) => any;
  };
}
