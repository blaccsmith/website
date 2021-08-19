import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

export const BLOGS_PATH = path.join(process.cwd(), 'blogs');

export const getBlog = async (slug: string) => {
	const blogPath = path.join(BLOGS_PATH, `${slug}.mdx`);
	const source = fs.readFileSync(blogPath);

	const { content, data } = matter(source);

	const mdxSource = await serialize(content, {
		mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
		scope: data,
	});

	return { source: mdxSource, frontMatter: data };
};

export const getBlogPaths = () => {
	const blogFilePaths = fs
		.readdirSync(BLOGS_PATH)
		.filter((path) => /\.mdx?$/.test(path));

	return blogFilePaths.map((path) => path.replace(/\.mdx?$/, ''));
};
