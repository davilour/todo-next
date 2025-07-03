import {  listToDos } from "./actions/todo";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todoList";
import { TodoViewModelProvider } from "./components/view-model-provider";

export default async function Page() {
  const todos = await listToDos();
  if(!todos) return null;

  return (
    <TodoViewModelProvider initialTodos={todos}>
      <TodoForm />
      <TodoList />
    </TodoViewModelProvider>
  );
}
