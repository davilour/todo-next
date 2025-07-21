"use client";

import { Card } from "@/components/ui/card";
import { Post } from "../../posts/store/post.store";
import Link from "next/link";

export default function BlogPosts({ initialPosts }: { initialPosts: Post[] }) {

  return (
    <div>
      <Card className="bg-white shadow-lg rounded-xl p-4 m-4">
        {initialPosts?.length > 0 ? (
          initialPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="hover:bg-gray-300 p-4 rounded transition cursor-pointer bg-gray-100">
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
