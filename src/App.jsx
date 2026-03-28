import './App.css'
import AddTodo from './components/AddToDo'
import ToDos from './components/ToDos'

function App() {
  return (
    <>
      <h1>Welcome to My Application</h1>
      <AddTodo />
      <ToDos />
    </>
  )
}

export default App