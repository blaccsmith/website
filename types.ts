export interface Author {
	name: string;
	photo?: string;
	twitter?: string;
	github?: string;
	linkedin?: string;
}
export interface BlogMetadata {
	published: string;
	title: string;
	author: Author;
	tags?: string;
	subtitle?: string;
	thumbnail?: string;
	instagram?: string;
	twitter?: string;
}

export interface Repository {
	url: string;
	name: string;
	description: string;
	stargazerCount: number;
	repositoryTopics: {
		nodes: [
			{
				topic: { name: string };
			}
		];
	};
	openGraphImageUrl: string;
	updatedAt: string;
}
