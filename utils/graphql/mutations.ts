export const reviewRepoMutation = `
	mutation ReviewRepoMutation($url: String!, $approved: Boolean!) {
		reviewRepo(url: $url, approved: $approved)
	}  
`;
