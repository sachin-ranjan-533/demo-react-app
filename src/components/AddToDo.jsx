import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice"; // 👈 make sure this exists

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    dispatch(
      addTodo(input)
    );

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        onChange={updateInput}
        value={input}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;