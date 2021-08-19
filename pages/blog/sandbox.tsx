import { Grid, Box, Heading, Button, Stack, Link } from '@chakra-ui/react';
import { getBlog } from 'mdx';
import components from 'mdx/components';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { BlogMetadata } from 'types';

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	frontMatter: BlogMetadata;
}
export default function Sandbox({ frontMatter, source }: Props): JSX.Element {
	const router = useRouter();

	return (
		<Grid
			templateColumns="1fr 3fr"
			h="calc(100% - 292px)"
			gap="4"
			p="6"
			pb="0"
		>
			<Box
				h="fit-content"
				w="fit-content"
				rounded="md"
				border="1px"
				borderColor="#424242"
				p="3"
			>
				<Heading as="h3" fontSize="lg" color="white">
					Helpful Resources
				</Heading>
				<Stack pl="3" mt="2" mb="4">
					<Link
						isExternal
						href="https://www.markdownguide.org/basic-syntax/"
						color="brand.purple"
					>
						Markdown Guide
					</Link>
					<Link
						isExternal
						href="https://mdxjs.com/"
						color="brand.purple"
					>
						MDX Docs
					</Link>
				</Stack>
				<Button
					size="sm"
					border="1px"
					_hover={{}}
					_active={{}}
					borderColor="#424242"
					bg="transparent"
					color="white"
					onClick={() => router.reload()}
				>
					Update changes
				</Button>
			</Box>
			<Box overflowY="scroll">
				<MDXRemote {...source} components={components} />
			</Box>
		</Grid>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const props = await getBlog('example');
	return { props };
};
