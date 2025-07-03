'use server'
import { amplifyApi } from "@/lib/amplify-server";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { Todo } from "@/API";
import { revalidatePath } from "next/cache";

export const listToDos = async (): Promise<Todo[]> => {
  const { data } = await amplifyApi.graphql({ query: queries.listTodos });
  return data.listTodos.items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
};

export const createToDos = async (content: string) => {

  try{
   const res =  await amplifyApi.graphql({
      query: mutations.createTodo,
      variables: {
        input: {
          content
        }
      },
    });

    const todoResult = res.data.createTodo as Todo
    console.log(todoResult)

    if (!todoResult.id) {
      throw new Error("Erro ao criar todo");
    }
    revalidatePath('/todo-list');
    return {
      success: true,
      todo:{
        id: todoResult.id,
        content: todoResult.content,
      },
      createdAt: new Date(todoResult.createdAt).toLocaleDateString(),
    }
  } 
  catch{
    throw new Error("Erro ao criar todo (lado servidor)");
  }
};

export const DeleteToDos = async (id: string) => {
  await amplifyApi.graphql({
    query: mutations.deleteTodo,
    variables: {
      input: { id }
    },
  });
  revalidatePath('/todo-list');
};

export const EditToDos = async (id: string, content: string) => {
  await amplifyApi.graphql({
    query: mutations.updateTodo,
    variables: {
      input: {
        id,
        content
      }
    }
  })
  revalidatePath('/todo-list');
}

