import { Post } from "@/types/post";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

async function getPosts(): Promise<Post[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "post"]{
            _id,
            _createdAt,
            title,
            publishedAt,
            "slug": slug.current
        } | order(publishedAt desc)`,
        {},
        {
            next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
        }
    )
}

async function getPost(slug: string): Promise<Post> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            publishedAt,
            "slug": slug.current,
            content
        }`,
        { slug },
        {
            next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
        }
    )
}
const posts = {
    getPosts,
    getPost
}

export default posts;