"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTodoStore } from "@/store/todo.store";
import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const { addTodo, removeTodo, todos } = useTodoStore();

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };

  const handleRemoveTodo = (id: any) => {
    removeTodo(id);
  };

  return (
    <div className="flex flex-col items-center h-screen border">
      <h1 className="text-3xl font-bold m-4">Insert a to-do here!</h1>
      <Input
        className="bg-white w-2xl"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </Button>
      {todos.map((item) => (
        <Card key={item.id}>
          <CardContent>{item.content}</CardContent>
          <Button
            onClick={() => handleRemoveTodo(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </Button>
        </Card>
      ))}
    </div>
  );
}
