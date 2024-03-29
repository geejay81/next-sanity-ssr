import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image'

type Props = {
    params: { project: string }
}

export default async function Project({params}: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div className="">
            <header className="flex items-center justify-between">

            <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-r from-blue-500 to-fuchsia-600
      bg-clip-text text-transparent">{project.name}</h1>
            <a href={project.url} 
                title="View project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap
                    hover:bg-fuchsia-600 hover:text-pink-100 transition">View project</a>
            </header>
        
            <div className="text-lg text-gray-100 mt-5">
                <PortableText value={project.content}></PortableText>
            </div>

            <Image
                className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
                src={project.image} width={1920} height={1080} alt="project.alt" />
        </div>
    )
}