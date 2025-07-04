import { useState } from "react";
import { DeleteButton } from "./delete-button";
import { EditButton } from "./edit-button";
import { Card, CardContent } from "@/components/ui/card";

export const TodoItem = ({
  id,
  content,
  isPending,
} : {
  id: string;
  content: string;
  isPending?: boolean | undefined;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);


  return (
    <Card>
      <CardContent>
        {isEditing ? (
          <input
            className="border rounded p-3 w-full mb-2"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            disabled={isPending}
          />
        ) : (
          <p className="break-words">{content}</p>
        )}
        <div className="flex gap-2">
          {isPending ? (
           <p className="text-sm text-red-600"> Salvando... </p>
          ) : (
            <>
              <DeleteButton id={id}/>
              <EditButton
                id={id}
                content={editContent}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
