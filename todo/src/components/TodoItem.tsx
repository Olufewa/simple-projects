import { useState } from "react";
import type { Todo } from "../types";
import { useTodoStore } from "../store/useTodoStore";

type Props = { todo: Todo };

export default function TodoItem({ todo }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.tittle);

  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const editTodo = useTodoStore((s) => s.editTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);

  function save() {
    const title = draft.trim();
    if (title) editTodo(todo.id, title);
    else setDraft(todo.tittle);
    setIsEditing(false);
  }

  function cancel() {
    setDraft(todo.tittle);
    setIsEditing(false);
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.compeleted}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <input
          className="edit"
          value={draft}
          autoFocus
          onChange={(e) => setDraft(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => {
            if (e.key === "Enter") save();
            if (e.key === "Escape") cancel();
          }}
        />
      ) : (
        <span
          className={todo.compeleted ? "title done" : "title"}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.tittle}
        </span>
      )}

      <button onClick={() => deleteTodo(todo.id)} aria-label="Delete">
        ✕
      </button>
    </li>
  );
}
