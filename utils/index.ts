/* eslint-disable @typescript-eslint/no-explicit-any */
import { request } from 'graphql-request';

export const api = 'http://localhost:3030/api';

export const fetcher = (query: string, variables?: string) =>
	request(api, query, variables ? JSON.parse(variables) : undefined);
