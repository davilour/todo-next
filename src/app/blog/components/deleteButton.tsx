"use client";
import { Button } from "@/components/ui/button";
import { Deleteposts } from "../../posts/actions/post";
import { useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useButtonState } from "@/store/button-state";

export const DeleteButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  const {lock, unlock} = useButtonState();
  const router = useRouter();

  const handleDelete = async () => {
    startTransition(async () => {
      try {
        lock();
        await Deleteposts(id);
        toast.success("Post deletada com sucesso!");
        router.push("/blog");
      } catch (error) {
        toast.error("Erro ao apagar o post");
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
          {isPending ? "Removendo..." : "Remover Post"}
        </Button>
      )}
    </div>
  );
};
