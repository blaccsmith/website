import {
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';

interface Props {
	show: boolean;
	handleClose: () => void;
}

export default function RepoComments({ show, handleClose }: Props) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		show ? onOpen() : onClose();
	}, [show]);

	useEffect(() => {
		!isOpen && handleClose();
	}, [isOpen]);

	return (
		<Drawer onClose={onClose} isOpen={isOpen} size="lg">
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader>Hi there</DrawerHeader>
				<DrawerBody>
					`You're trapped 😆 , refresh the page to leave or press
					'Esc' key.`
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
}
