import posts from "@/sanity/queries/posts.query"
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
}

export default async function Page({ params }: Props) {

    const slug = params.slug;
    const post = await posts.getPost(slug);

    return (
        <div> 
            <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-r from-blue-500 to-fuchsia-600
                bg-clip-text text-transparent">{post.title}</h1>
      
            <div className="text-lg text-gray-200 mt-10 space-y-8"><PortableText value={post.content}></PortableText></div>
        </div>
    );
}