export const reposQuery = `
	{
		getRepos(filter: "approved") {
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
