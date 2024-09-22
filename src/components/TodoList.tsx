import { ChangeEvent, useState } from "react"
import { Button } from "./ui/button"
import { v4 as uuidV4 } from "uuid"
import { INewItem } from "@/types/interfaces"

// import TodoItem from "./TodoItem"


const TodoList = () => {
  const [newItem, setNewItem] = useState<string>("")
  const [todos, setTodos] = useState<INewItem[]>([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodos(currentTodos => {
      return [...currentTodos, {
        title: newItem,
        id: uuidV4(),
        completed: false,
      }]
    })
    setNewItem("")
  }

  const toggleTodo = (id: string, completed: boolean) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  const deleteTodo = (id: string) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5">
        <div className="flex flex-col gap-1 ">
          <label
            className=""
            htmlFor="item">Create list</label>
          <input
            className="shad-input-list "
            type="text"
            id="item"
            value={newItem}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setNewItem(e.target.value)}
          />
        </div>
        <div className="flex gap-2 items-center justify-end">
          <Button className="shad-button_dark_small" type="submit">Add</Button>
        </div>
      </form>
      <div>
        <ul className="m-0 p-0 list-none">
          {todos.length === 0 && "No Todos"}
          {todos.map(todo => {
            return (
              <li key={todo.id}>
                <label>
                  <input
                    className="mr-4"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={e => toggleTodo(todo.id, e.target.checked)}
                  />
                  {todo.title}
                  <Button
                    onClick={() => deleteTodo(todo.id)}
                    className="">
                    <img src="/public/assets/icons/delete.svg" alt="delete" />
                  </Button>
                </label>
              </li>
            )
          })}
        </ul>
      </div>

    </>
  )
}

export default TodoList
