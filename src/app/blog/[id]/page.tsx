"use client";

import { useParams } from "next/navigation";
import { usePostStore } from "@/app/posts/store/post.store";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { fetchPostById } from "@/app/posts/actions/post";
import { EditButton } from "@/app/blog/components/editButton";
import { DeleteButton } from "@/app/blog/components/deleteButton";

export default function PostPage() {
  const params = useParams();
  const postId = params.id as string;
  const { posts, addPost } = usePostStore();
  const post = posts.find((p) => p.id === postId);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(post?.content || "");

  useEffect(() => {
    if (!postId || post) return;

    setLoading(true);
    fetchPostById(postId)
      .then((fetched) => {
        if (fetched) addPost(fetched);
      })
      .finally(() => setLoading(false));
  }, [postId, post]);


  if (loading) {
    return <div className="text-white text-center p-4">Carregando post...</div>;
  }

  if (!post) {
    return (
      <div className="text-white text-center p-4">Post não encontrado.</div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="p-6 max-w-xl w-full bg-white shadow-lg rounded-xl">
        {isEditing ? (
          <>
            <h1 className="text-2xl font-bold text-black mb-4">{post.title}</h1>
            <input
              className="border rounded p-3 w-full mb-2"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-black mb-4">{post.title}</h1>
            <p className="text-gray-800">{post.content}</p>
          </>
        )}
        <div className="flex justify-start gap-3">
          <DeleteButton id={post.id} />
          <EditButton
            id={post.id}
            title={post.title}
            content={editContent}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </div>
      </Card>
    </div>
  );
}
