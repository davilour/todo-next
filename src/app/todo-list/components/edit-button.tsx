'use client'
import { Button } from "@/components/ui/button";
import { EditToDos } from "../actions/todo";
import { useTransition } from "react";

type EditButtonProps = {
  id: string;
  content: string;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
};

export const EditButton = ({
  id,
  content,
  isEditing,
  setIsEditing,
}: EditButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleEdit = () => {
    if (isEditing) {
      startTransition(async () => {
        await EditToDos(id, content);
        setIsEditing(false);
      });
    } else {
      setIsEditing(true);
    }
  };

  return (
    <Button
      disabled={isPending}
      className="bg-blue-500 text-white py-2 rounded"
      onClick={() => handleEdit()}
    >
      {isEditing ? (isPending ? "Salvando..." : "Salvar") : "Editar"}
    </Button>
  );
};
