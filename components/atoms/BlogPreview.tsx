import { AspectRatio,Text, Box, HStack } from "@chakra-ui/react";
import React from "react";
import { BlogMetadata } from "types";
import Image from 'next/image'
import { MdAccessTime } from 'react-icons/md'

interface Props {
    data: BlogMetadata
    timeAgo: string
}

export default function BlogPreview({ data, timeAgo }:Props) {
    return (
        <Box>
            <AspectRatio pos='relative' ratio={16/9} overflow='hidden' rounded='xl' maxW='80' >
                <Image src={data.thumbnail} objectFit='cover' layout='fill' alt='Blog thumbnail' />
            </AspectRatio>
            <Text my='2' fontSize='xl' color='brand.white' fontWeight='bold'>{data.title}</Text>
            <HStack>
                <MdAccessTime color='#eee' />
                <Text my='2' fontSize='md' color='brand.offWhite'>{timeAgo}</Text>
            </HStack>
        </Box>
    )
}