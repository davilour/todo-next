"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostStore } from "../store/post.store";
import z from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function PostForm() {
  const { addPost, posts } = usePostStore();
  console.log(posts);

  const postSchema = z.object({
    title: z
      .string()
      .min(2, { message: "Title must be at least 2 characters." }),
    content: z
      .string()
      .min(2, { message: "Content must be at least 2 characters." }),
  });

  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const handleAddPost = (values: z.infer<typeof postSchema>) => {
    if (!values.title || !values.content) return;

    const optimisticNote = {
      id: crypto.randomUUID(),
      title: values.title.trim(),
      content: values.content.trim(),
      createdAt: new Date().toISOString(),
      isPending: true,
    };

    addPost(optimisticNote);
    form.reset();
    toast.success("Post criada com sucesso!");
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-2xl font-bold m-4 text-white">
        What do you want to post?
      </h1>
      <Input
        {...form.register("title")}
        className="bg-white w-2xl m-4"
        placeholder="Insert title"
      />
      <Input
        {...form.register("content")}
        className="bg-white w-2xl m-4"
        placeholder="Insert your content"
      />
      <Button
        onClick={form.handleSubmit(handleAddPost)}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Add
      </Button>
    </div>
  );
}
