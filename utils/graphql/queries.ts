import { gql } from 'graphql-request';

export const reposQuery = gql`
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
			}
			openGraphImageUrl
			updatedAt
		}
	}
`;
