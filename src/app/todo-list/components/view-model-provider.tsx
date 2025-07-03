'use client'

import { Todo, useTodoStore } from "@/app/todo-list/store/todo.store";
import { ReactNode, useEffect } from "react";

type Props = {
    initialTodos: Todo[];
    children: ReactNode;
}

export const TodoViewModelProvider = ({initialTodos, children}: Props) =>{
    const setTodos = useTodoStore((s) => s.setTodos)

    useEffect(() => {
        setTodos(initialTodos);
    }, [initialTodos])
    return <>{children}</>
}