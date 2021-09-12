export interface BlogMetadata {
	title: string;
	author: string;
	published: string;
	photo?: string;
	tags?: string;
	instagram?: string;
	twitter?: string;
}

export interface Resource {
	url: string;
	name: string;
	description: string;
	stars: number;
	topics: string[];
	updatedAt: string;
}
