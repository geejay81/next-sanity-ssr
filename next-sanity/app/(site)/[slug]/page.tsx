import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);

    return (
        <div> 
            <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-r from-blue-500 to-fuchsia-600
                bg-clip-text text-transparent">{page.title}</h1>
      
            <div className="text-lg text-gray-200 mt-10 space-y-8"><PortableText value={page.content}></PortableText></div>
        </div>
    )
}