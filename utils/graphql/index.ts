/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLClient } from 'graphql-request';

interface Params {
	query: string;
	variables: any;
	requestHeaders?: any;
}

export default class GraphQL {
	client;
	constructor(url?: string) {
		this.client = new GraphQLClient(
			url ?? 'https://api.github.com/graphql'
		);
	}

	async runQuery({ query, variables, requestHeaders }: Params) {
		return await this.client.request(query, variables, {
			...requestHeaders,
			authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		});
	}
}
