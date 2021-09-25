export const reposMutation = `
	mutation Mutation($addRepoUrl: String!) {
		addRepo(url: $addRepoUrl)
	}
`;
