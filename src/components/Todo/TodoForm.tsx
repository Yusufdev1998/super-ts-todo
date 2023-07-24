import { Button, Input } from "@mui/joy";
import { ChangeEvent, FormEvent, RefObject } from "react";

interface ITodoForm {
  submitTodo: (e: FormEvent<HTMLFormElement>) => void;
  inputTodo: string;
  setInputTodo: (todo: string) => void;
  isEdit: boolean;
  todoInputRef: RefObject<HTMLInputElement>;
}
const TodoForm: React.FC<ITodoForm> = ({
  inputTodo,
  setInputTodo,
  submitTodo,
  isEdit,
  todoInputRef,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  };
  return (
    <form
      onSubmit={submitTodo}
      style={{
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "10px",
        }}
      >
        <Input
          color="success"
          placeholder="your todo"
          size="lg"
          slotProps={{
            input: {
              ref: todoInputRef,
            },
          }}
          name="title"
          variant="soft"
          value={inputTodo}
          onChange={handleChange}
        />
        <Button type="submit" color="success" variant="soft">
          {isEdit ? "Edit" : "Add"}
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
