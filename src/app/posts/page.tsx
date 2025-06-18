"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostStore } from "@/store/post.store";
import { useState } from "react";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { addPost } = usePostStore();

  const handleAddPost = () => {
    if (!title.trim() || !body.trim()) return;
    setTitle("");
    setBody("");
    addPost(title.trim(), body.trim());
  };

  return (
    <div className="flex flex-col items-center h-screen border ">
      <h1 className="text-2xl font-bold m-4">What do you want to post?</h1>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-white w-2xl m-4"
        placeholder="Insert a title"
      />
      <Input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="bg-white w-2xl m-4"
        placeholder="Insert your content"
      />
      <Button
        onClick={handleAddPost}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </Button>
    </div>
  );
}
