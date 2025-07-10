'use client'

import { usePostStore } from "@/store/post.store";

export default function Blog (){
    const { posts } = usePostStore();

    return(
        <div>
            <h1>Blog</h1>
            {posts.map(post => (
                <div key={post.id} onClick={() => {
                    window.location.href = `/blog/${post.id}`
                }}>
                    <h2>{post.content}</h2>
                </div>
            ))}
        </div>  
    )
}