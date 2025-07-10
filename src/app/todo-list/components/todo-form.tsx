"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useButtonState } from "@/store/button-state";
import z from "zod";
import { toast } from "sonner";
import { useTodoStore } from "@/app/todo-list/store/todo.store";
import { useTransition } from "react";
import { createToDos } from "../actions/todo";
import { nanoid } from "nanoid";
import { SignoutButton } from "@/app/auth/components/signout-button";

export const TodoForm = () => {
  const { lock, unlock } = useButtonState();
  const [isPending, startTransition] = useTransition();
  const { addTodo, removeTodo, updateTodo } = useTodoStore();

  const formSchema = z.object({
    content: z.string().min(2, {
      message: "Todo must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    lock();
    const optimisticNote = {
      id: nanoid(),
      content: values.content,
      createdAt: new Date().toISOString(),
      isPending: true,
    };
    addTodo(optimisticNote);
    startTransition(async () => {
      const res = await createToDos(values.content);
      if (res?.success) {
        toast.success("Todo criada com sucesso!");
        updateTodo(optimisticNote.id, {
          content: res.todo.content,
          createdAt: res.createdAt,
          isPending: false,
        });
      } else {
        removeTodo(res.todo.id);
        toast.success("Erro ao criar todo");
      }
    });
    form.reset({
      content: "",
    });
    unlock();
  };
  return (
    <div className="flex justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="bg-gray-200"
                    placeholder="Insert a to-do here"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your todo.</FormDescription>
                <FormMessage className="text-red-500 text-sm font-medium" />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-center gap-3.5 mb-3">
            <Button className=" bg-gray-500" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
