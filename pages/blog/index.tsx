import BlogPreview from "@/components/atoms/BlogPreview"
import { Box, Heading,Grid } from "@chakra-ui/react"
import { getBlog, getBlogPaths } from "mdx"
import { GetStaticProps } from "next"
import { BlogMetadata } from "types"
import { format, formatDistance } from 'date-fns'

export const getStaticProps: GetStaticProps = async () => {
    const paths = getBlogPaths()
    const blogs = await Promise.all(paths.map(async(slug) => await getBlog(slug)))
    const previews = blogs.map((el) => el.frontMatter)
    return { props: { previews } }
}

interface Props {
    previews: BlogMetadata[]
}

export default function Blog({ previews }:Props) {
    const publishedAt = new Date(previews[0].published);
    const timeAgo = formatDistance(publishedAt, new Date(), { addSuffix: true }) 
    
    
    return (
        <Box minHeight='calc(100vh - 218px)' p='16'>
            <Heading as='h1' color='brand.white' fontSize='4xl' mb='12'>Blog</Heading>
            <Grid templateColumns='repeat(4,1fr)' gap='9'>
                {previews.map(el => <BlogPreview data={el} key={el.title} timeAgo={timeAgo} />)}
            </Grid>
        </Box>
    )
}