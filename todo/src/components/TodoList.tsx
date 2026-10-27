import { useTodoStore } from "../store/useTodoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((s) => s.todos);

  if (todos.length === 0) return <p className="empty">Nothing to do 🎉</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
