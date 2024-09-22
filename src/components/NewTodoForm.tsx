import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "./ui/input"
import { TodoValidation } from "@/lib/validation"


const NewTodoForm = () => {

  // 1. Define your form.
  const form = useForm<z.infer<typeof TodoValidation>>({
    resolver: zodResolver(TodoValidation),
    defaultValues: {
      newItem: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof TodoValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full max-w-5x1">
        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Create list</FormLabel>
              <FormControl>
                <Input className="shad-input-list" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 items-center justify-end">
          <Button className="shad-button_dark_small" type="submit">Cancel</Button>
          <Button className="shad-button_primary whitespace-nowrap" type="submit">Add</Button>
        </div>
      </form>
    </Form>
  )
}

export default NewTodoForm
