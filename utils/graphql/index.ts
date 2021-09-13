import { GraphQLClient } from 'graphql-request';

interface Params {
	query: string;
	variables: any;
	requestHeaders?: any;
}

export default class GraphQL {
	client;
	constructor() {
		this.client = new GraphQLClient('https://api.github.com/graphql');
	}

	async runQuery({ query, variables, requestHeaders }: Params) {
		return await this.client.request(query, variables, {
			...requestHeaders,
			authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		});
	}
}
