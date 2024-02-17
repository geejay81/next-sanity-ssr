import Profile from "@/components/profile";
import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from "next/link";

export default async function Home() {

  const projects = await getProjects();

  return (
    <div className="">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m <span className="bg-gradient-to-r from-blue-300 to-fuchsia-500
          bg-clip-text text-transparent">Greg!</span></h1>

      <p className="mt-3 text-xl text-gray-100">Welcome to my website!</p>
      <h2 className="mt-24 font-bold text-gray-100 text-3xl">My projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link 
          href={`/projects/${project.slug}`}
          key={project._id} 
          className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-300">
          {project.image && (
            <Image 
              src={project.image} 
              alt={project.alt}
              width={750}
              height={300}
              className="object-cover rounded-lg border-gray-500"></Image>
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-blue-500 to-fuchsia-600
      bg-clip-text text-transparent">{project.name}</div></Link>
      ))}
      </div>
    </div>
    
  );
}
