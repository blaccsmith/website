import type { NextApiRequest, NextApiResponse } from 'next';
import type { PostgrestResponse } from '@supabase/supabase-js';
import { supabase, client } from '@/utils/index';
import { reposQuery } from '../../lib/queries';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST':
			const created_at: string = new Date(Date.now()).toISOString();

			const { error: postError }: PostgrestResponse<any> = await supabase
				.from('resources')
				.insert([
					{
						created_at: created_at,
						url: req.body.url,
					},
				]);

			if (postError !== null) {
				res.status(400).json({ message: postError });
			}

			res.status(201).json({
				message: 'Thanks for the submission',
			});
			break;
		case 'GET':
			const { data: repos, error: getError }: PostgrestResponse<any> =
				await supabase.from('resources').select('*');

			if (getError !== null) {
				res.status(400).json({ message: getError });
			}

			const requestHeaders = {
				authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			};

			let unresolvedResources: Promise<any>[] | undefined = (
				repos as any[]
			).map(async (repo) => {
				const [, owner, name] = repo.url.substring(8).split('/');
				const variables = { owner: owner, name: name };

				return await client.request(
					reposQuery,
					variables,
					requestHeaders
				);
			});
			const resources = await Promise.all(unresolvedResources);
			res.status(200).json({ resources });
			break;
		default:
			res.status(400).json({ message: 'Not found' });
	}
};
