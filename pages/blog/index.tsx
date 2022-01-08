import BlogPreview from '@/components/atoms/BlogPreview';
import { Box, Heading, Grid } from '@chakra-ui/react';
import { getBlog, getBlogPaths } from 'mdx';
import { GetStaticProps } from 'next';
import { BlogMetadata } from 'types';
import { formatDistance } from 'date-fns';
import { Client } from '@notionhq/client';

export const getStaticProps: GetStaticProps = async () => {
	const notion = new Client({ auth: process.env.NOTION_SECRET });
	const blocks = await notion.blocks.children.list({
		block_id: process.env.BLOGS_PAGE_ID as string,
	});
	const dbID = blocks.results.find(
		(el) => (el as any).type === 'child_database'
	)?.id as string;

	const { results } = await notion.databases.query({ database_id: dbID });

	const blogs = results.filter(
		(el: any) => el.properties.Status.select?.name === 'To Publish'
	);

	const page = await notion.pages.retrieve({
		page_id: blogs[0].id,
	});

	// const block = await notion.blocks.retrieve({
	// 	block_id: '%7BeDR',
	// });
	console.log({ page, thumbnail: page.properties.Thumbnail });
	// console.log({ block });

	// const paths = getBlogPaths();
	// const blogs = await Promise.all(
	// 	paths.map(async (slug) => await getBlog(slug))
	// );
	// const previews = blogs.map((el) => el.frontMatter);
	// return { props: { previews } };
	return { props: { blogs } };
};

interface Props {
	// previews: BlogMetadata[];
	blogs: any[];
}

export default function Blog({ blogs }: Props) {
	return (
		<Box as="pre" color="white">
			{JSON.stringify(blogs, null, 2)}
		</Box>
	);
	// const publishedAt = new Date(previews[0].published);
	// const timeAgo = formatDistance(publishedAt, new Date(), {
	// 	addSuffix: true,
	// });

	// return (
	// 	<Box minHeight="calc(100vh - 218px)" p="16">
	// 		<Heading as="h1" color="brand.white" fontSize="4xl" mb="12">
	// 			Blog
	// 		</Heading>
	// 		<Grid templateColumns="repeat(4,1fr)" gap="9">
	// 			{previews.map((el) => (
	// 				<BlogPreview data={el} key={el.title} timeAgo={timeAgo} />
	// 			))}
	// 		</Grid>
	// 	</Box>
	// );
}
