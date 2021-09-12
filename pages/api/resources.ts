import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST':
			//add a new resource to supabase
			res.status(200).json({ message: 'Thanks for the submission' });
			break;
		case 'GET':
			//get all supabase resources
			break;
		default:
			res.status(400).json({ message: 'Not found' });
	}
};
