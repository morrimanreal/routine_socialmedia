
import { Button } from './ui/button'

const TodoItem = () => {


  return (
    <>
      <ul className='m-0 p-0'>
        <li className='flex flex-row'>
          <label>
            <input type="checkbox" /> Take dog for a walk
          </label>
          <Button className='pb-6'><img src="/public/assets/icons/delete.svg" alt="delete" /></Button>
        </li>
        <li className='flex flex-row'>
          <label>
            <input type="checkbox" /> Feed dog
          </label>
          <Button className='pb-6'><img src="/public/assets/icons/delete.svg" alt="delete" /></Button>
        </li>
        <li className='flex flex-row'>
          <label>
            <input type="checkbox" /> Eat breakfast
          </label>
          <Button className='pb-6'><img src="/public/assets/icons/delete.svg" alt="delete" /></Button>
        </li>
      </ul>
    </>
  )
}

export default TodoItem
