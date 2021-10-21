import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, Text } from '@chakra-ui/layout';

interface PillersTabsContentProps {
	activeTab: number;
}
export default function PillersTabsContent({
	activeTab,
}: PillersTabsContentProps): ReactJSXElement {
	return (
		<Box h="100%" w="100%" pos="relative" pl={3}>
			<Box
				color="brand.white"
				position="absolute"
				transition="all .5s"
				animation="fadeIn"
				opacity={activeTab === 0 ? '1' : '0'}
				top={activeTab === 0 ? '0px' : '-20px'}
			>
				<Text fontSize="3xl" fontFamily="heading">
					Do you see 1 Teletubbies in here
				</Text>
				<Text>
					1 you see any Teletubbies in here? Do you see a slender
					plastic tag clipped to my shirt with my name printed on it?
				</Text>
			</Box>
			<Box
				color="brand.white"
				position="absolute"
				transition="all .5s"
				animation="fadeIn"
				opacity={activeTab === 1 ? '1' : '0'}
				top={activeTab === 1 ? '0px' : '10px'}
			>
				<Text fontSize="3xl" fontFamily="heading">
					Do you see 2 Teletubbies in here
				</Text>
				<Text>
					2 want see any Teletubbies in here? Do you see a slender
					plastic tag clipped to my shirt with my name printed on it?
				</Text>
			</Box>
			<Box
				color="brand.white"
				position="absolute"
				transition="all .5s"
				animation="fadeIn"
				opacity={activeTab === 2 ? '1' : '0'}
				top={activeTab === 2 ? '0px' : '20px'}
			>
				<Text fontSize="3xl" fontFamily="heading">
					Do you see 3 Teletubbies in here
				</Text>
				<Text>
					3 you see any Teletubbies in here? Do you see a slender
					plastic tag clipped to my shirt with my name printed on it?
				</Text>
			</Box>
		</Box>
	);
}
