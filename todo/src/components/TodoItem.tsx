import { useState } from "react";
import type { Todo } from "../types";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onEdit, onDelete }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.tittle);

  function save() {
    const title = draft.trim();
    if (title) onEdit(todo.id, title);
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
        onChange={() => onToggle(todo.id)}
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

      <button onClick={() => onDelete(todo.id)} aria-label="Delete">
        ✕
      </button>
    </li>
  );
}
