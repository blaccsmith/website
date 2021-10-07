/* eslint-disable indent */
import { request } from 'graphql-request';

export const api =
	process.env.NEXT_PUBLIC_TARGET_ENV === 'prod'
		? 'https://api.blacc.xyz/api'
		: process.env.NEXT_PUBLIC_TARGET_ENV === 'staging'
		? 'https://staging-api.blacc.xyz/api'
		: 'http://localhost:3030/api';

export const fetcher = (query: string) => request(api, query);

export const toKebabCase = (str: string) =>
	str.trim().replace(/\s+/g, '-').toLowerCase();

export const convertNum = (num: number) => {
	if (num < 1000) return num;

	const si = [
		{ v: 1e3, s: 'K' },
		{ v: 1e6, s: 'M' },
		{ v: 1e9, s: 'B' },
		{ v: 1e12, s: 'T' },
		{ v: 1e15, s: 'P' },
		{ v: 1e18, s: 'E' },
	];
	let i;
	for (i = si.length - 1; i > 0; i--) {
		if (num >= si[i].v) {
			break;
		}
	}
	return (
		(num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') +
		si[i].s
	);
};
