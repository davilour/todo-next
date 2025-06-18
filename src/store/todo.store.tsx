import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (content: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (content) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now().toString(), content, completed: false }],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: 'todo-storage',
    }
  )
);
