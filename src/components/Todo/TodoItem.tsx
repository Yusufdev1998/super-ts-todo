import { Card, Checkbox } from "@mui/joy";
import ModeIcon from "@mui/icons-material/Mode";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ITodo from "../../Interfaces/ITodo";
import { ChangeEvent } from "react";
import { ICheckTodo, IEditTodo, IRemoveTodo } from "../../hooks/useTodo";

export interface ITodoItem extends ITodo {
  checkTodo: ICheckTodo;
  removeTodo: IRemoveTodo;
  editTodo: IEditTodo;
}

const TodoItem: React.FC<ITodoItem> = ({
  id,
  title,
  completed,
  checkTodo,
  editTodo,
  removeTodo,
}) => {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    checkTodo(id, e.target.checked);
  };
  const handleDelete = () => removeTodo(id);
  const handleEdit = () => editTodo(id);
  return (
    <Card
      sx={{
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Checkbox
          checked={completed}
          color="success"
          onChange={handleCheck}
          label={<span>{title}</span>}
          variant="soft"
        />
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <ModeIcon
            className="icon"
            onClick={handleEdit}
            color="success"
          ></ModeIcon>
          <RemoveCircleIcon
            className="icon"
            onClick={handleDelete}
            color="error"
          ></RemoveCircleIcon>
        </div>
      </div>
    </Card>
  );
};

export default TodoItem;
