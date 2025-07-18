import { create } from "zustand";

export type Post = { 
  id: string;
  title: string;  
  content: string;
}

type PostStore = {   
  posts: Post[];
  addPost: (post: Post) => void;
  removePost: (id: string) => void;
}

export const usePostStore = create<PostStore>()(
  (set) => ({
    posts: [],
    addPost: (post) =>
      set((state) => ({
        posts: [...state.posts, post],
      })),
    removePost: (id) =>
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
      })),
  }),
);
