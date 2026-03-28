import './App.css'
import AddTodo from './components/AddToDo'
import ToDos from './components/ToDos'

function App() {
  return (
    <>
      <h1>Welcome to My To-Do Application</h1>
      <h3>Create new To-Do</h3>
      <AddTodo />
      <h3>List of All To-Dos</h3>
      <ToDos />
    </>
  )
}

export default App