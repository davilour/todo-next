'use client'

import { useTodoStore } from "@/app/todo-list/store/todo.store";

import { TodoItem } from "./todo-item-edit";


export function TodoList () {
  const {todos} = useTodoStore();
  if(!todos) return null;
  
  return (
    <div className="flex flex-row items-center gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} content={todo.content} isPending={todo.isPending} />
      ))}
    </div>
  );
}