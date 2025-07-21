"use server";
import BlogPosts from "./components/blogPosts";
import { listPosts } from "../posts/actions/post";

export default async function Blog() {
  const posts = await listPosts();

  return (
    <div>
      <BlogPosts initialPosts={posts} />
    </div>
  );
}
