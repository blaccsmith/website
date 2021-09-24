export const reposQuery = `
	{
		getRepos {
			url
			name
			description
			stargazerCount
			stargazerCount
			repositoryTopics {
				nodes {
					topic {
						name
					}
				}
			}
			openGraphImageUrl
			updatedAt
		}
	}	
`;
