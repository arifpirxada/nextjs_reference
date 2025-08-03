"use client"
import { use } from "react";

interface Post {
    id: number | string;
    title: string;
    desc: string
}

const Posts = ({
    posts
}: {
    posts: Promise<{ posts: Post[] }>
}) => {

    const allPosts = use(posts)

    return (
        <div className="flex flex-wrap justify-center mt-2">
            { allPosts.posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                allPosts.posts.map((post) => (
                    <div key={ post.id } className="p-2 flex-30 t-c">
                        <h3>{ post.title }</h3>
                        <p>{ post.desc }</p>
                    </div>
                ))
            ) }
        </div>
    );
};

export default Posts;