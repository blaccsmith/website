import {
	Flex,
	Heading,
	Select,
	Box,
	Stack,
	Text,
	Button,
	Textarea,
} from '@chakra-ui/react';
import { Form, Formik, Field, FieldProps } from 'formik';
import React from 'react';

const channels = ['general', 'announcements', 'opportunities'];

interface Props {
	handleSubmit: () => void;
}

const HomeUI = ({ handleSubmit }: Props) => {
	return (
		<Flex
			py="16"
			flexGrow={1}
			justifyContent="start"
			alignItems="center"
			flexDir="column"
		>
			<Heading
				as="h3"
				fontSize="3xl"
				textAlign="center"
				color="brand.white"
			>
				Send a message
			</Heading>
			<Text color="brand.white" w="50%" mt="4" textAlign="center">
				Want to send a message to a particular channel as the{' '}
				<Text as="span" fontWeight="bold">
					{' '}
					BLACC Smith{' '}
				</Text>{' '}
				bot?
			</Text>
			<Box spacing={12} mt={32} w="full" maxW="450px">
				<Formik
					initialValues={{ channel: '', message: '' }}
					onSubmit={(values) => {
						console.log({ values });
					}}
				>
					{() => (
						<Form>
							<Field name="lastName">
								{({ field }: FieldProps) => (
									<Stack spacing={12}>
										<Select
											w="full"
											placeholder="channel"
											color="brand.white"
											bg="#353535"
											borderColor="transparent"
											_hover={{
												borderColor: 'brand.purple.400',
											}}
											_active={{
												borderColor: 'brand.purple.400',
											}}
											_focus={{
												borderColor: 'brand.purple.400',
											}}
											{...field}
										>
											{channels.map((el, idx) => (
												<option key={idx} value={el}>
													{el}
												</option>
											))}
										</Select>
										<Textarea
											placeholder="Enter your message..."
											color="brand.white"
											bg="#353535"
											minH="150px"
											maxH="300px"
											borderColor="transparent"
											_hover={{
												borderColor: 'brand.purple.400',
											}}
											_active={{
												borderColor: 'brand.purple.400',
											}}
											_focus={{
												borderColor: 'brand.purple.400',
											}}
										/>
										<Button
											color="brand.white"
											px="12"
											transition="all .2s"
											onClick={handleSubmit}
											bgGradient="linear(to-r, brand.purple.400, brand.purple.500)"
											_hover={{}}
											_active={{}}
											_focus={{}}
										>
											Send message
										</Button>
									</Stack>
								)}
							</Field>
						</Form>
					)}
				</Formik>
			</Box>
		</Flex>
	);
};

export default function Home() {
	const handleSubmit = () => {
		alert();
	};
	return <HomeUI handleSubmit={handleSubmit} />;
}
