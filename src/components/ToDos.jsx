import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice"

const Todos = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const deleteToDo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
      todos.map((todo) => 
      <div key={todo.id}>
        <p>{todo.text}</p>
        <button onClick={() => deleteToDo(todo.id)}>Delete</button>
      </div>
    )
  )
}

export default Todos;
