/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import type { NextApiRequest, NextApiResponse } from 'next';
import GraphQL from '@/utils/graphql';
import { reposQuery } from '@/utils/graphql/queries';
import Supabase from '@/utils/supabase';
import axios from 'axios';
import { api } from '@/utils/index';
import { reposMutation } from '@/utils/graphql/mutations';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		res.status(400).json({ message: 'Invalid request' });
		return;
	}

	try {
		await axios.get(req.body.url);

		const gql = new GraphQL(api);
		const data = await gql.runQuery({
			query: reposMutation,
			variables: { addRepoUrl: req.body.url },
		});

		res.status(201).json({ message: data });
	} catch (error) {
		res.status(201).json({ error: 'Repo must be public' });
	}
}
