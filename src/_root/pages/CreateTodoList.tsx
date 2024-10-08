
import NewTodoForm from '@/components/NewTodoForm'
import TodoList from '@/components/TodoList'



const CreateTodoList = () => {
  return (
    <div className='flex flex-1'>
      <div className='common-container'>
        <div className='max-w-5x1 flex-start gap-3 justify-start w-full'>
          <img
            src="/assets/icons/add-post.svg"
            width={36}
            height={36}
            alt="add"
          />
          <h2 className='h3-bold md:h2-bold text-left w-full'>Todo List</h2>
        </div>
        <TodoList />
      </div>

    </div>
  )
}

export default CreateTodoList
