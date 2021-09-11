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
	thumbnail: string;
}
