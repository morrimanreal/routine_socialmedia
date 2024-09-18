

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <Button
        onClick={() => { deleteTodo(id) }}
      // className="btn btn-danger"
      > Delete </Button>
    </li>
  )
}

export default TodoItem
