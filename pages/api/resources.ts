import type { NextApiRequest, NextApiResponse } from 'next';
import GraphQL from '@/utils/graphql';
import { reposQuery } from '@/utils/graphql/queries';
import Supabase from '@/utils/supabase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const supabase = new Supabase();

	switch (req.method) {
		case 'POST':
			const created_at: string = new Date(Date.now()).toISOString();
			const { error } = await supabase.insert('resources', {
				created_at: created_at,
				url: req.body.url,
			});

			if (error) res.status(500).json({ message: error.message });
			else res.status(201).json({ message: 'Thanks for the submission' });
			break;
		case 'GET':
			const { data, error: err } = await supabase.getAll('resources');

			if (err) res.status(500).json({ message: err.message });

			const gql = new GraphQL();
			const promises = (data as any[]).map(async (repo) => {
				const [, owner, name] = repo.url.substring(8).split('/');
				return await gql.runQuery({
					query: reposQuery,
					variables: { owner, name },
				});
			});

			const resources = await Promise.all(promises);
			res.status(200).json({ resources });
			break;
		default:
			res.status(400).json({ message: 'Not found' });
	}
};
