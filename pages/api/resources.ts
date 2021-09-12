import type { NextApiRequest, NextApiResponse } from 'next';

const query = gql`
	query repo($name: String!, $owner: String!) {
		repository(name: $name, owner: $owner) {
			url
			name
			description
			stargazerCount
			repositoryTopics(first: 3) {
				nodes {
					topic {
						name
					}
				}
				totalCount
			}
			updatedAt
		}
	}
`;

export default (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST':
			//add a new resource to supabase
			res.status(200).json({ message: 'Thanks for the submission' });
			break;
		case 'GET':
			//get all supabase resources

			// pass name and owne as variables to the gql query
			const [, owner, name] = repo.substring(8).split('/');
			break;
		default:
			res.status(400).json({ message: 'Not found' });
	}
};
