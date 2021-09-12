import { GraphQLClient } from 'graphql-request';

export const client: GraphQLClient = new GraphQLClient(
	'https://api.github.com/graphql'
);
