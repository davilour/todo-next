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
  editPost: (id: string, post: Post) => void;
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
    editPost: (id: string, updated: Post) =>
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === id ? { ...post, ...updated } : post,
        ),
      })),
  }),
);
