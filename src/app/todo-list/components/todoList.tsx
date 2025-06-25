'use client'

import { Todo } from "@/API";

import { TodoItem } from "./todo-item-edit";


export function TodoList ({todos}: {todos: Todo[]}) {

  if(!todos) return null;
 
  return (
    <div className="flex flex-col items-center gap-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} content={todo.content} />
      ))}
    </div>
  );
}