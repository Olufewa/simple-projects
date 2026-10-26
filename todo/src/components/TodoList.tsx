import type { Todo } from "../types";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoList({ todos, onToggle, onEdit, onDelete }: Props) {
  if (todos.length === 0) return <p className="empty">Nothing to do 🎉</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
