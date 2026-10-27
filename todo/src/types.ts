export type Todo = {
  id: string;
  tittle: string;
  compeleted: boolean;
};

export type TodoState = {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};
