/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import { fetcher } from '@/utils/index';
import { Repository } from 'types';
import axios from 'axios';

interface ReposResponse {
	error: any;
	loading: boolean;
	resources: {
		repository: Repository;
	}[];
}

interface Props {
	query: string;
	url: string;
}

const tempFetcher = async (query: string, url: string) => {
	try {
		console.log({ query, url });
		await axios.get(url);
		console.log('hi');
		const res = await fetcher(query, url);
		console.log({ res });
		return { data: res };
	} catch (error) {
		return { error: 'Repo must be public' };
	}
};

export default function useRepos({ query, url }: Props): ReposResponse {
	const { data: res } = useSWR(url ? [query, url] : null, tempFetcher);

	console.log({ data: res?.data, error: res?.error });

	return {
		error: res?.error,
		loading: !res?.error && !res?.data,
		resources: res?.data?.resources,
	};
}
