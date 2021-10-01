import { request } from 'graphql-request';

const api = 'https://api-git-staging-blacc.vercel.app/api';

export const fetcher = (query: string) => request(api, query);

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
