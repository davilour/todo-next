import { create } from "zustand";

type Post = {
  id: string;
  content: string;
}

type PostStore = {
  posts: Post[];
  addPost: (id: string, content: string) => void;
  removePost: (id: string) => void;
}

export const usePostStore = create<PostStore>()(
  (set) => ({
    posts: [],
    addPost: (id, content) =>
      set((state) => ({
        posts: [...state.posts, { id, content }],
      })),
    removePost: (id) =>
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
      })),
  }),
);
