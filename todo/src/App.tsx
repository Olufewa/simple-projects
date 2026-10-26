import { useState } from "react";
import type { Todo } from "./types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(tittle: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      tittle: tittle,
      compeleted: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id: string) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, compeleted: !t.compeleted } : t)),
    );
  }

  function editTodo(id: string, tittle: string) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, tittle } : t)));
  }

  function deleteTodo(id: string) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <main className="app">
      <h1>Felzy's Todo List!</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </main>
  );
}
