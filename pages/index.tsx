import { GetStaticProps } from 'next';
import { homePageImages } from '../constants';
import { useState } from 'react';
import PillersTabs from '@/components/molecules/PillersTabs';
import PillersTabsContent from '@/components/molecules/PillersTabsContent';

import {
	Box,
	HStack,
	Stack,
	Text,
	Button,
	Grid,
	GridItem,
	Center,
	Image,
} from '@chakra-ui/react';

interface HomepageProps {
	images: string[];
}

const Home = ({ images }: HomepageProps) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<Box padding="0 6">
			<Center>
				<HStack spacing={224}>
					<Stack w={537} spacing={5}>
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
						{images.map((src: string, idx: number) => {
							return (
								<GridItem key={idx}>
									{idx === 4 || idx === 5 ? (
										<Box
											key={idx}
											width="auto"
											height="auto"
										></Box>
									) : (
										<Image
											src={src}
											key={idx}
											alt={`black people in tech #${idx}`}
											width={172}
											height={172}
											objectFit="cover"
											filter="grayscale(100%)"
											_hover={{ filter: 'grayscale(0%)' }}
										/>
									)}
								</GridItem>
							);
						})}
					</Grid>
				</HStack>
			</Center>
			<Center>
				<Stack h="100vh" w="100%" bg="red" pl={6} pr={6}>
					<Center>
						<Text
							color="brand.white"
							fontSize="3xl"
							fontFamily="heading"
							margin="6px 0px"
						>
							What we're about
						</Text>
					</Center>
					<HStack h="216px">
						<PillersTabs
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						<PillersTabsContent activeTab={activeTab} />
					</HStack>
				</Stack>
			</Center>
			{/* <Box h="100vh" bg="orange" p="6"></Box> */}
		</Box>
	);
};
export const getStaticProps: GetStaticProps = async () => {
	const images = homePageImages;
	return { props: { images } };
};
export default Home;
