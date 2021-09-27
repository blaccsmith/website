/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import { fetcher } from '@/utils/index';
import { reviewRepoMutation } from '@/utils/graphql/mutations';

interface ReposResponse {
	error: any;
	loading: boolean;
	res: string;
}

interface Props {
	variables: any;
}

export default function useReviewRepo({ variables }: Props): ReposResponse {
	const key = JSON.stringify(variables);

	const { data, error } = useSWR(
		variables.url ? [reviewRepoMutation, key] : null,
		fetcher,
		{ revalidateOnFocus: false }
	);

	return { error, loading: !error && !data, res: data?.reviewRepo };
}
