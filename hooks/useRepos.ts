/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import { fetcher } from '@/utils/index';
import { pendingRepos } from '@/utils/graphql/queries';

interface ReposResponse {
	error: any;
	loading: boolean;
	repos: { url: string }[];
}

export default function useRepos(): ReposResponse {
	const { data, error } = useSWR(pendingRepos, fetcher);

	return { error, loading: !error && !data, repos: data?.getRepos };
}
