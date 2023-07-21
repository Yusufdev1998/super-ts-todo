import ITodo from "../../Interfaces/ITodo";
import { ICheckTodo, IEditTodo, IRemoveTodo } from "../../hooks/useTodo";
import TodoItem from "./TodoItem";

interface ITodoItems {
  todos: ITodo[];
  checkTodo: ICheckTodo;
  removeTodo: IRemoveTodo;
  editTodo: IEditTodo;
}
const TodoItems: React.FC<ITodoItems> = ({
  todos,
  editTodo,
  checkTodo,
  removeTodo,
}) => {
  return (
    <div className="items">
      {todos?.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          checkTodo={checkTodo}
          editTodo={editTodo}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
