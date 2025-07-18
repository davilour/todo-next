"use client";

import { useParams } from "next/navigation";
import { usePostStore } from "@/app/posts/store/post.store";
import { Card } from "@/components/ui/card";

export default function PostPage() {
  const params = useParams();
  const postId = params.id as string;
  const { posts } = usePostStore();

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="text-center text-white mt-10">
        Post não encontrado.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="p-6 max-w-xl w-full bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-black mb-4">{post.title}</h1>
        <p className="text-gray-800">{post.content}</p>
      </Card>
    </div>
  );
}
