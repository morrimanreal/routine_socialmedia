import { useState } from "react"
import { Button } from "./ui/button"
import TodoItem from "./TodoItem"

const NewTodoForm = () => {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ])
  }


  return (
    <>
      <form
        onSubmit={() => {
          handleSubmit
        }}
        className="flex flex-col gap-2">
        <div className="flex-row">
          <label htmlFor="item"></label>
          <input
            className="text-dark-4"
            value={newItem}
            type="text"
            id="item"
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <Button className="shad-button_dark_4">Add</Button>
      </form>
      <TodoItem />
    </>
  )
}

export default NewTodoForm
