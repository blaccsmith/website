/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import GraphQL from '@/utils/graphql';
import { reposQuery } from '@/utils/graphql/queries';
import Supabase from '@/utils/supabase';
import axios from 'axios';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const supabase = new Supabase();

	switch (req.method) {
		case 'POST':
			try {
				await axios.get(req.body.url);

				const created_at: string = new Date(Date.now()).toISOString();
				const { error } = await supabase.insert('resources', {
					created_at: created_at,
					url: req.body.url,
				});

				if (error) res.status(500).json({ message: error.message });
				else
					res.status(201).json({
						message: 'Thanks for the submission',
					});
			} catch (error) {
				res.status(201).json({ error: 'Repo must be public' });
			}
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
}
