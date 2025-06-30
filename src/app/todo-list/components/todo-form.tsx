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
import z from "zod";
import { toast } from "sonner";
import { TodoType } from "@/schemas/todo-schema";
import { createToDos } from "../actions/todo";

export const TodoForm = () => {
  const formSchema = z.object({
    content: z.string().min(2, {
      message: "Todo must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const optimisticNote = {
      content: values.content
    };
    await createToDos(optimisticNote);
    form.reset({
      content: '',
    });
    toast.success("Todo criada com sucesso!");
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
                    placeholder="insert a to-do here"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your todo.</FormDescription>
                <FormMessage className="text-red-500 text-sm font-medium" />
              </FormItem>
            )}
          />
          <Button className="mb-4 ml-2 bg-gray-500" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
