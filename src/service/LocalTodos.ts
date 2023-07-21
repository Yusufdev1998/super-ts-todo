import ITodo from "../Interfaces/ITodo";

const LOCAL_TODOS = "todos";

export const updateLocalTodos = (todos: ITodo[]) => {
  const updatedJSONTodos = JSON.stringify(todos);
  window.localStorage.setItem(LOCAL_TODOS, updatedJSONTodos);
};

export const getLocalTodos = (): ITodo[] => {
  const localJSONTodos = window.localStorage.getItem(LOCAL_TODOS);
  if (localJSONTodos) {
    return JSON.parse(localJSONTodos);
  } else return [];
};
