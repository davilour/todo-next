import {  listToDos } from "./actions/todo";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todoList";

export default async function Page() {
  const todos = await listToDos();
  if(!todos) return null;

  return (
    <>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
}
