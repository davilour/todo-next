import {create } from 'zustand'
import { persist } from 'zustand/middleware';

interface Post{
    id: string;
    title: string;
    body: string;
}

interface PostStore {
    posts: Post[]
    addPost: (title: string, body: string) => void;
    removePost: (id: string) => void;
}

export const usePostStore = create<PostStore>()(
    persist(
      (set) => ({
        posts: [],
        addPost: (title, body) =>
          set((state) => ({
            posts: [...state.posts, { id: Date.now().toString(), title, body}],
          })),
        removePost: (id) =>
          set((state) => ({
            posts: state.posts.filter((post) => post.id !== id),
          })),
      }),
      {
        name: 'post-storage',
      }
    )
  );