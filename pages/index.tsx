import { GetStaticProps } from 'next';
import { useEffect, useRef, useState } from 'react';
import { homePageImages, pillars } from '../constants';
import {
	Box,
	HStack,
	Stack,
	Text,
	Button,Heading,
	Grid,
	GridItem,
	Center,
	Image,
} from '@chakra-ui/react';

interface Props {
	images: string[];
}

const Home = ({ images }: Props) => {
	const [pos,setPos] = useState(0);
	const scrollingContainer= useRef<HTMLDivElement>(null) 

	useEffect(() => {
		scrollingContainer.current?.scrollTo({
			top: 207 * pos,
			behavior:'smooth'
		})
	},[pos])

	const getTop = () => {
		return pos === 0? '0':pos ===1 ?'33%':'67%'
	}
	
	return (
		<Box p="6">
			<Center flexDir='column'>
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
											key={src}
											alt={src}
											id={src}
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
				<Box mt='32'>
					<Heading fontSize='3xl' color='brand.white'>What we're about</Heading>
					<HStack mt='48'>
						<Stack spacing={0} pos='relative'>
							{pillars.map((el,idx) => (
								<Box key={idx} py='4' px='6' pos='relative' cursor='pointer' onClick={() => setPos(idx)}>
									<Text color='#909090' fontSize='xl' textAlign='right'>{el.label}</Text>
									<Box pos='absolute' right='0' top='0' h='full' w='1' bg='#909090' />
								</Box>

							))}		
							<Box transition='all .2s' pos='absolute' right='0' top={getTop()} h='33%' w='1' bg='brand.purple.400' />
						</Stack>
						<Box h='207px' overflowY='scroll' ref={scrollingContainer}>
							{pillars.map((el,idx) => (
								<Center key={idx} h='207px' px='16'>
									<Text color='brand.white'>{el.description}</Text>
								</Center>
							))}
						</Box>
					</HStack>
				</Box>
			</Center>
		</Box>
	);
};
export const getStaticProps: GetStaticProps = async () => {
	const images = homePageImages;
	return { props: { images } };
};
export default Home;
