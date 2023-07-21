import {
  FormEvent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { v4 as uuid } from "uuid";
import ITodo from "../Interfaces/ITodo";
import { getLocalTodos, updateLocalTodos } from "../service/LocalTodos";

export type ICheckTodo = (id: string, value: boolean) => void;
export interface IRemoveTodo {
  (id: string): void;
}

export interface IEditTodo {
  (id: string): void;
}

export default () => {
  const [todos, setTodos] = useState<ITodo[]>(getLocalTodos());
  const [inputTodo, setInputTodo] = useState<string>("");
  const [currentTodoId, setCurrentTodoId] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const todoInputRef: RefObject<HTMLInputElement> = useRef(null);
  useEffect(() => {
    updateLocalTodos(todos);
  }, [todos]);
  const submitTodo = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (inputTodo !== "") {
        if (isEdit) {
          setTodos(prev =>
            prev.map(todo => {
              if (todo.id === currentTodoId) {
                const updatedTodo: ITodo = {
                  ...todo,
                  title: inputTodo,
                };

                return updatedTodo;
              } else return todo;
            })
          );
          setIsEdit(false);
          setCurrentTodoId(null);
        } else {
          const new_todo: ITodo = {
            id: uuid(),
            title: inputTodo,
            completed: false,
          };
          setTodos(prev => [new_todo, ...prev]);
        }
        setInputTodo("");
      }
    },
    [inputTodo]
  );

  const checkTodo: ICheckTodo = (id: string, value: boolean) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          const updatedTodo: ITodo = {
            ...todo,
            completed: value,
          };
          return updatedTodo;
        } else return todo;
      })
    );
  };

  const removeTodo: IRemoveTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editTodo: IEditTodo = id => {
    const findCurrentTodo = todos.find(todo => todo.id === id);
    if (findCurrentTodo) {
      todoInputRef.current?.focus();
      setInputTodo(findCurrentTodo.title);
      setIsEdit(true);
      setCurrentTodoId(id);
    }
  };
  return {
    submitTodo,
    setInputTodo,
    inputTodo,
    todos,
    editTodo,
    removeTodo,
    checkTodo,
    isEdit,
    todoInputRef,
  };
};
