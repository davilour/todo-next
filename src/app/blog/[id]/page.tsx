"use client";

import { useParams } from "next/navigation";
import { usePostStore } from "@/app/posts/store/post.store";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { fetchPostById } from "@/app/posts/actions/post";
import { Button } from "@/components/ui/button";

export default function PostPage() {
  const params = useParams();
  const postId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const { posts, addPost } = usePostStore();
  const [loading, setLoading] = useState(false);

  let post = posts.find((p) => p.id === postId);

  useEffect(() => {
    if (!postId || post) return;

    setLoading(true);
    fetchPostById(postId)
      .then((fetched) => {
        if (fetched) addPost(fetched);
      })
      .finally(() => setLoading(false));
  }, [postId, post]);

  post = posts.find((p) => p.id === postId);

  if (loading) {
    return <div className="text-white text-center p-4">Carregando post...</div>;
  }

  if (!post) {
    return <div className="text-white text-center p-4">Post não encontrado.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="p-6 max-w-xl w-full bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-black mb-4">{post.title}</h1>
        <p className="text-gray-800">{post.content}</p>
      </Card>
    </div>
  );
}
