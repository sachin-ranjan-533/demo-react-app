import './App.css'
import AddTodo from './components/AddToDo'
import ToDos from './components/ToDos'
import ProductList from './components/ProductList'

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" elements={ < ProductList/> } />
      </Routes>
      <h1>Welcome to My To-Dos Application</h1>
      <h3>Create new To-Do</h3>
      <AddTodo />
      <h3>List of All To-Dos</h3>
      <ToDos />
    </>
  )
}

export default App