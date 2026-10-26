import { useState } from "react";

type Props = { onAdd: (title: string) => void };

export default function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const title = text.trim();
    if (!title) return;
    onAdd(title);
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
