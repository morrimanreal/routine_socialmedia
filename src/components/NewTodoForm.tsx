import { useState } from "react"
import { Button } from "./ui/button"


const NewTodoForm = (props) => {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
    props.onSubmit(newItem)

    setNewItem("")
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">What to do?</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item" />
        </div>
        <Button className="btn">Add</Button>
      </form>
    </>
  )
}

export default NewTodoForm
