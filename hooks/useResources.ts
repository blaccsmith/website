/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import { fetcher } from '@/utils/index';
import { Repository } from 'types';

interface Props {
	error: any;
	loading: boolean;
	resources: {
		repository: Repository;
	}[];
}

export default function useResources(): Props {
	const { data, error } = useSWR('/api/resources', fetcher);

	return {
		error,
		loading: !error && !data,
		resources: data?.resources,
	};
}
