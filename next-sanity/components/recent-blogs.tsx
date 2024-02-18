import posts from "@/sanity/queries/posts.query"
import { Post } from "@/types/post";
import Link from "next/link";
import React from "react";

export default async function RecentBlogs() {

    const blogs = await posts.getPosts();

    return (
        <section>
            <h2 className="mt-24 font-bold text-gray-100 text-3xl">Recent blog posts</h2>
            <ul>
                {blogs.map((post: Post) => (
                    <li key={post._id}>
                        <Link href={`/posts/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}