import {
	Box,
	VStack,
	HStack,
	Spacer,
	Stack,
	Text,
	Button,
	Grid,
	GridItem,
	Center,
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { getHomePageImages } from '../utils';

interface Props {
	images: any;
}

const Home = ({ images }: Props) => {
	return (
		<Box p="6">
			<Center>
				<HStack spacing={224}>
					<Stack w={537} p="6" spacing={5}>
						<Text
							color="brand.white"
							fontFamily="heading"
							fontSize="4xl"
							lineHeight="52px"
						>
							A global community for you, built by people like
							you.
						</Text>
						<Text
							color="brand.white"
							fontSize="lg"
							lineHeight="32px"
						>
							Now that we know who you are, I know who I am. I'm
							not a mistake! It all makes sense!
						</Text>
						<Button
							w="170px"
							borderRadius={90}
							color="brand.black"
							bgColor="brand.accent.dark"
							fontSize="0.875rem"
							fontFamily="heading"
						>
							Join the community
						</Button>
					</Stack>
					<Grid
						templateColumns="repeat(3,1fr)"
						templateRows="repeat(3,1fr)"
						gap="1.013rem"
					>
						{images.map((src: string) => {
							return (
								<GridItem key={src}>
									{!src.includes('5') &&
									!src.includes('6') ? (
										<Image
											src={src}
											key={src}
											alt={src}
											width={172}
											height={172}
										/>
									) : (
										<Box
											key={src}
											width="auto"
											height="auto"
										></Box>
									)}
								</GridItem>
							);
						})}
					</Grid>
				</HStack>
			</Center>
		</Box>
	);
};
export const getStaticProps: GetStaticProps = async () => {
	const images = getHomePageImages();
	return { props: { images } };
};
export default Home;
