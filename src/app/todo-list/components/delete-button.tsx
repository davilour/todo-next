'use client'
import { Button } from "@/components/ui/button";
import { DeleteToDos } from "../actions/todo";
import { useTransition } from "react";

export const DeleteButton = ({id}: {id: string}) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      await DeleteToDos(id);  
    });
  };

  return(
    <Button
    disabled={isPending}
    className="bg-red-500 text-white py-2 rounded"
    onClick={() => handleDelete()}
  >
    {isPending ? "Removendo..." : "Remover"}
  </Button>
  );
  
};
