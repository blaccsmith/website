import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Stack, Text } from '@chakra-ui/layout';

interface PillersTabsProps {
	activeTab: number;
	setActiveTab: (activeTab: number) => void;
}

export default function PillersTabs({
	activeTab,
	setActiveTab,
}: PillersTabsProps): ReactJSXElement {
	return (
		<Stack
			textAlign="right"
			borderInlineEnd="2px solid #909090"
			shouldWrapChildren={true}
		>
			<Text
				color={activeTab === 0 ? 'brand.purple.400' : '#909090'}
				borderInlineEndColor={
					activeTab === 0 ? 'brand.purple.400' : '#909090'
				}
				onClick={() => setActiveTab(0)}
				cursor="pointer"
				pr={2}
				mr="-2px"
				borderInlineEnd="2px solid"
				fontSize="3xl"
				transition="all .2s"
			>
				Equity
			</Text>
			<Text
				color={activeTab === 1 ? 'brand.purple.400' : '#909090'}
				borderInlineEndColor={
					activeTab === 1 ? 'brand.purple.400' : '#909090'
				}
				onClick={() => setActiveTab(1)}
				cursor="pointer"
				fontSize="3xl"
				pr={2}
				marginRight="-2px"
				borderInlineEnd="2px solid"
				transition="all .2s"
			>
				Education
			</Text>
			<Text
				color={activeTab === 2 ? 'brand.purple.400' : '#909090'}
				borderInlineEndColor={
					activeTab === 2 ? 'brand.purple.400' : '#909090'
				}
				onClick={() => setActiveTab(2)}
				cursor="pointer"
				fontSize="3xl"
				fontFamily="subtitle"
				pr={2}
				mr="-2px"
				borderInlineEnd="2px solid"
				transition="all .2s"
			>
				Collaboration
			</Text>
		</Stack>
	);
}
