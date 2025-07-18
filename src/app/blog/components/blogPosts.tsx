"use client";

import { Card } from "@/components/ui/card";
import { usePostStore } from "../../posts/store/post.store";
import Link from "next/link";

export default function BlogPosts() {
  const { posts } = usePostStore();
  console.log(posts);

  return (
    <div>
      <Card>
        {posts?.length > 0 ? (
          posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="hover:bg-gray-100 p-4 rounded transition cursor-pointer">
                <h2 className="text-black">{post.title}</h2>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-white">Nenhum post ainda.</p>
        )}
      </Card>
    </div>
  );
}
