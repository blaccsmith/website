/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import { fetcher } from '@/utils/index';
import { Repository } from 'types';
import { reposQuery } from '@/utils/graphql/queries';

interface ReposResponse {
	error: any;
	loading: boolean;
	repos: Repository[];
}

export default function useRepos(): ReposResponse {
	const { data, error } = useSWR(reposQuery, fetcher);

	return {
		error,
		loading: !error && !data,
		repos: data?.getRepos,
	};
}
