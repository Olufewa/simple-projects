import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoInput() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((s) => s.addTodo);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const title = text.trim();
    if (!title) return;
    addTodo(title);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs doing?"
      />
      <button type="submit">Add</button>
    </form>
  );
}
