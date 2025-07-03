"use client";
import { Button } from "@/components/ui/button";
import { DeleteToDos } from "../actions/todo";
import { useTransition } from "react";
import { toast } from "sonner";
import {useTodoStore} from "@/app/todo-list/store/todo.store";

import { useButtonState } from "@/store/button-state";

export const DeleteButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  const {lock, unlock} = useButtonState();
  const {makeTodoAsDeleting} = useTodoStore();

  const handleDelete = async () => {
    makeTodoAsDeleting(id);
    startTransition(async () => {
      try {
        lock();
        await DeleteToDos(id);
        toast.success("Todo deletada com sucesso!");
      } catch (error) {
        toast.error("Erro ao apagar o todo");
      } finally {
        unlock();
      }
    });
  };

  return (
    <div>
      {isPending ? (
        <Button className="text-sm text-muted-foreground animate-pulse">
          Removendo...
        </Button>
      ) : (
        <Button
          disabled={isPending}
          className="bg-red-500 text-white py-2 rounded"
          onClick={() => handleDelete()}
        >
          {isPending ? "Removendo..." : "Remover"}
        </Button>
      )}
    </div>
  );
};
