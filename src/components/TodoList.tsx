import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "./hooks/use-toast"
import { useState } from "react"

const todoSchema = z.object({
  newItem: z.string().min(2,
    { message: "Username must be at least 2 characters.", })
})

type TodoForm = z.infer<typeof todoSchema>
type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  // 1. Define your form.
  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      newItem: "",
    },
  })

  // 2. Define a submit handler.
  const onsubmit = (data: TodoForm) => {
    const todoExists = todos?.some((todo) => {
      return todo?.text?.toLowerCase() === data?.newItem?.toLowerCase();
    });
    if (todoExists) {
      toast.error("Todo already exists");
    }
    if (!todoExists) {
      const newTodo = { id: Date.now(), text: data.newItem, completed: false };
      setTodos((prev) => [...prev, newTodo]);
    }
    reset();
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onsubmit)} className="flex flex-col gap-9 w-full max-w-5xl">
        <FormField
          control={form.control}
          name="list"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add list</FormLabel>
              <FormControl>
                <Input
                  className="shad-input" {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  )
}

export default TodoList
