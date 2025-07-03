import { z } from 'zod'

 const formSchema = z.object({
    content: z.string().min(2, {
      message: "Todo must be at least 2 characters.",
    }),
  });
export type TodoType = z.infer<typeof formSchema>
