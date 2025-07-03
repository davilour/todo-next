import { create } from "zustand";

export type Todo = {
  id: string;
  content: string;
  createdAt: string
  isPending?: boolean;
  isDeleting?: boolean;
  error?: boolean;
}

type TodoStore = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (content: Todo) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, partial: Partial<Todo>) => void;
  makeTodoDeleteFailed: (id: string) => void;
  makeTodoAsDeleting: (id: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todos) => set((state) => ({ ...state, todos })),
  addTodo: (content) =>
    set((state) => ({
      todos: [
        { id: content.id, content: content.content, createdAt: content.createdAt, isPending: content.isPending },
         ...state.todos,
      ],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  makeTodoDeleteFailed: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isDeleting: false, error: true} : todo
      ),
    })),
  makeTodoAsDeleting: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isDeleting: true, error: false} : todo
      ),
    })),
  updateTodo: (tempId, newTodo) => {
  set((state) => {
    const updated = { ...state.todos.find((todo) => todo.id === tempId)!, ...newTodo };
    const remaining = state.todos.filter((todo) => todo.id !== tempId);
    return {
      todos: [...remaining, updated],
    };
  });
},
}));



