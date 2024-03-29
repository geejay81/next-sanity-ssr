import { Project } from './../types/project';
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config';
import { Page } from './../types/page';
import { Profile } from '@/types/profile';

export async function getProfile(): Promise<Profile> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "profile"][0] {
        _id,
        fullName,
        headline,
        profileImage {alt, "image": asset->url},
        shortBio,
        location,
        fullBio,
        email,
        "resumeURL": resumeURL.asset->url,
        socialLinks,
        skills
      }`,
      {},
      {
          next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
      }
    );
  }

export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.asset->alt,
            url,
            content
        }`,
        {},
        {
            next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
        }
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.asset->alt,
            url,
            content
        }`
        , { slug },
        {
            next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
        }
    )
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`,
        {},
        {
            next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
        }
    );
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        { slug },
        {
            next: { revalidate: Number(process.env.REVALIDATE_CACHE_SECONDS) }
        }
    );
}