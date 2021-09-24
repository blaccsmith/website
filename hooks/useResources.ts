/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import { fetcher } from '@/utils/index';
import { Repository } from 'types';

interface ReposResponse {
	error: any;
	loading: boolean;
	repos: Repository[];
}

interface Props {
	query: string;
}

export default function useRepos({ query }: Props): ReposResponse {
	const { data, error } = useSWR(query, fetcher);

	console.log({ data, error });

	return {
		error,
		loading: !error && !data,
		repos: data?.getRepos,
	};
}
