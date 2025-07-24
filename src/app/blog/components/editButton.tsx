'use client'
import { Button } from "@/components/ui/button";
import { Editposts } from "../../posts/actions/post";
import { usePostStore } from "../../posts/store/post.store";
import { useTransition } from "react";
import { toast } from "sonner";

type EditButtonProps = {
  id: string;
  title: string;
  content: string;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
};

export const EditButton = ({
  id,
  title,
  content,
  isEditing,
  setIsEditing,
}: EditButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const { editPost } = usePostStore();

  const handleEdit = () => {
    if (isEditing) {
      editPost(id, { id, title, content });
      startTransition(async () => {
        setIsEditing(false);
        await Editposts(id, title, content);
        toast.success("Post editado com sucesso!");
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
      {isEditing ? (isPending ? "Salvando..." : "Salvar Post") : "Editar Post"}
    </Button>
  );
};
