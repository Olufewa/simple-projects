import { create } from "zustand";
import type { TodoState } from "../types";

export const useTodoStore = create<TodoState>()((set) => ({
  todos: [],

  addTodo: (tittle) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: crypto.randomUUID(), tittle, compeleted: false },
      ],
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, compeleted: !t.compeleted } : t,
      ),
    })),

  editTodo: (id, tittle) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === id ? { ...t, tittle } : t)),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));
