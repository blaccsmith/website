import { request } from 'graphql-request';

export const api = 'http://localhost:3030/api';

export const fetcher = (query: string) => request(api, query);
