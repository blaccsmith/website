import {
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	Text,
	Heading,
	DrawerBody,
	DrawerCloseButton,
	Divider,
	DrawerFooter,
	HStack,
	Input,
	Button,
	Flex,
	FormControl,
	FormHelperText,
	Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Repository } from 'types';

interface Props {
	show: boolean;
	data: Repository;
	handleClose: () => void;
}

const comments = ['hi there', 'great experience'];
export default function RepoComments({ show, data, handleClose }: Props) {
	const [comment, setComment] = useState('');
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		show ? onOpen() : onClose();
	}, [show]);

	useEffect(() => {
		!isOpen && handleClose();
	}, [isOpen]);

	const handleSubmit = () => {
		if (!comment) return;
		else alert(comment);
	};

	return (
		<Drawer onClose={onClose} isOpen={isOpen} size="lg">
			<DrawerOverlay />
			<DrawerContent bg="brand.black">
				<DrawerHeader>
					<Heading color="brand.white">{data.name}</Heading>
					<Text color="brand.white" fontSize="sm" fontWeight="normal">
						{data.description}
					</Text>
					<DrawerCloseButton color="brand.white" />
				</DrawerHeader>
				<Divider />
				<DrawerBody pt="4">
					<Text py="2" px="4" rounded="full" color="brand.offWhite">
						hi
					</Text>
				</DrawerBody>
				<DrawerFooter>
					<FormControl id="Repo">
						<HStack>
							<Input
								value={comment}
								type="text"
								color="brand.white"
								bg="#353535"
								borderColor="transparent"
								_hover={{ borderColor: 'brand.purple.400' }}
								_active={{ borderColor: 'brand.purple.400' }}
								_focus={{ borderColor: 'brand.purple.400' }}
								onChange={(e) => setComment(e.target.value)}
								placeholder="Add a comment"
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
								Submit
							</Button>
						</HStack>
					</FormControl>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
