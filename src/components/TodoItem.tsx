
import { Button } from './ui/button'

const TodoItem = () => {


  return (
    <>
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
    </>
  )
}

export default TodoItem
