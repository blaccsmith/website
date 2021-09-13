export interface BlogMetadata {
	title: string;
	author: string;
	published: string;
	photo?: string;
	tags?: string;
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
	updatedAt: string;
}
