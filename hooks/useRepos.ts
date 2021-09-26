/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import { fetcher } from '@/utils/index';

interface ReposResponse {
	error: any;
	loading: boolean;
	repos: { url: string }[];
}

interface Props {
	query: string;
}

export default function useRepos({ query }: Props): ReposResponse {
	const { data, error } = useSWR(query, fetcher);

	return {
		error,
		loading: !error && !data,
		repos: data?.getRepos,
	};
}
