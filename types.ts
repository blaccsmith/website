export interface BlogMetadata {
	published: string;
	title: string;
	author: {
		name: string;
		photo?: string;
		twitter?: string;
		github?: string;
		linkedin?: string;
	};
	tags?: string;
	subtitle?: string;
	thumbnail?: string;
}
