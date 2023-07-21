import { Sheet, Typography } from "@mui/joy";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

import "./todo.css";
import useTodo from "../../hooks/useTodo";

const Todo = () => {
  const {
    todos,
    submitTodo,
    inputTodo,
    setInputTodo,
    removeTodo,
    editTodo,
    checkTodo,
    isEdit,
    todoInputRef,
  } = useTodo();
  return (
    <Sheet
      variant="solid"
      sx={{
        padding: "40px 60px",
        borderRadius: "6px",
        minWidth: 600,
      }}
    >
      <Typography
        sx={{
          marginBottom: 3,
          textAlign: "center",
          color: "white",
        }}
        level="h1"
      >
        Todo App
      </Typography>
      <TodoForm
        isEdit={isEdit}
        submitTodo={submitTodo}
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todoInputRef={todoInputRef}
      ></TodoForm>
      <TodoItems
        removeTodo={removeTodo}
        todos={todos}
        editTodo={editTodo}
        checkTodo={checkTodo}
      ></TodoItems>
    </Sheet>
  );
};

export default Todo;
