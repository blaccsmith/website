import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Home = () => {
	return (
		<Box p="16">
			<Box my="6" shadow="md" rounded="md" p="3" bg="brand.black">
				<Heading fontSize="3xl" color="brand.white">
					Card Title
				</Heading>
				<Heading
					fontSize="xl"
					color="brand.white"
					fontFamily="subtitle"
				>
					Subtitle
				</Heading>
				<Text mt="2" color="brand.white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					nec lacinia augue. Etiam in augue scelerisque, faucibus
					magna nec, venenatis mauris.
				</Text>
				<Button
					rounded="full"
					mt="3"
					bg="brand.accent.dark"
					color="brand.black"
				>
					Call to action
				</Button>
			</Box>
		</Box>
	);
};

export default Home;
