import { GetStaticProps } from 'next';
import { useEffect, useRef, useState } from 'react';
import { homePageImages, pillars, whyUs, reviews } from '../constants';
import {
	Box,
	HStack,
	Stack,
	Text,
	Button,
	Heading,
	Grid,
	GridItem,
	Center,
	Image,
	VStack,
	Avatar,
} from '@chakra-ui/react';

interface HomepageProps {
	images: string[];
}

const Home = ({ images }: HomepageProps) => {
	const [pos, setPos] = useState(0);
	const scrollingContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		scrollingContainer.current?.scrollTo({
			top: 207 * pos,
			behavior: 'smooth',
		});
	}, [pos]);

	const getTop = () => {
		return pos === 0 ? '0' : pos === 1 ? '33%' : '67%';
	};

	return (
		<Box p="6">
			<Center flexDir="column">
				<HStack spacing={224}>
					<Stack w="50%" spacing={5}>
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
				<VStack
					mt="32"
					justifyContent="center"
					alignItems="center"
					h="100vh"
					bg="green"
				>
					<Heading fontSize="3xl" color="brand.white">
						What we're about
					</Heading>
					<HStack mt="48">
						<Stack spacing={0} pos="relative" mt={6}>
							{pillars.map((el, idx) => (
								<Box
									key={idx}
									py="4"
									px="6"
									pos="relative"
									cursor="pointer"
									onClick={() => setPos(idx)}
								>
									<Text
										color="#909090"
										fontSize="xl"
										textAlign="right"
									>
										{el.label}
									</Text>
									<Box
										pos="absolute"
										right="0"
										top="0"
										h="full"
										w="1"
										bg="#909090"
									/>
								</Box>
							))}
							<Box
								transition="all .2s"
								pos="absolute"
								right="0"
								top={getTop()}
								h="33%"
								w="1"
								bg="brand.purple.400"
							/>
						</Stack>
						<Box
							h="207px"
							overflowY="scroll"
							overflow="hidden"
							ref={scrollingContainer}
						>
							{pillars.map((el, idx) => (
								<Center key={idx} h="207px" px="16">
									<Text color="brand.white">
										{el.description}
									</Text>
								</Center>
							))}
						</Box>
					</HStack>
				</VStack>
				<VStack
					mt="32"
					justifyContent="center"
					alignItems="center"
					h="100vh"
					w="100%"
				>
					<Heading fontSize="3xl" color="brand.white">
						Why us?
					</Heading>
					<Grid
						templateRows="repeat(2,1fr)"
						templateColumns="repeat(2,1fr)"
						gap={2}
					>
						{whyUs.map((el, idx) => (
							<GridItem key={idx} w="full" h="full" p="9">
								<Center
									flexDirection="column"
									transition="all .2s"
									_hover={{
										boxShadow: '6px 6px #7B61FF',
										transform: 'translate(-9px,-9px)',
									}}
								>
									<Text
										fontSize="4xl"
										fontFamily="heading"
										fontWeight="bold"
										color="brand.white"
									>
										{el.title}
									</Text>
									<Text color="brand.white">
										{el.subtitle}
									</Text>
								</Center>
							</GridItem>
						))}
					</Grid>
				</VStack>
				<VStack
					mt="32"
					justifyContent="center"
					alignItems="center"
					h="100vh"
					w="100%"
					textAlign="center"
					spacing={20}
				>
					<Heading fontSize="3xl" color="brand.white">
						What others are saying about us
					</Heading>
					<Grid
						templateColumns={{ sm: 'none:', md: 'repeat(3,1fr)' }}
						gap={9}
						w="90%"
						mt={10}
					>
						{reviews.map((el, idx) => (
							<GridItem
								key={idx}
								w="full"
								h="154px"
								p="9"
								position="relative"
								border="2px solid #7B61FF"
								boxShadow="-9px 0px #5b44fd"
								borderRadius="10px"
								bgColor={
									idx % 2 !== 0
										? 'none'
										: 'rgba(123,97,255,0.2)'
								}
							>
								<Stack>
									<Text
										fontSize="4xl"
										position="absolute"
										fontWeight="bold"
										top="-4px"
										left="2"
										color="brand.white"
									>
										“
									</Text>
									<Text color="brand.white">{el.review}</Text>
									<HStack
										position="absolute"
										bottom="2"
										left="2"
									>
										<Avatar
											name={el.name}
											src="https://pbs.twimg.com/profile_images/1440016777719734275/8mCVdLib_400x400.jpg"
											size="sm"
										/>
										<Text
											color="brand.white"
											fontSize="inherit"
										>
											{el.name}
										</Text>
									</HStack>
								</Stack>
							</GridItem>
						))}
					</Grid>
				</VStack>
			</Center>
		</Box>
	);
};
export const getStaticProps: GetStaticProps = async () => {
	const images = homePageImages;
	return { props: { images } };
};
export default Home;
