import { AnimatePresence, Variants, motion } from "framer-motion";
import ITodo from "../../Interfaces/ITodo";
import { ICheckTodo, IEditTodo, IRemoveTodo } from "../../hooks/useTodo";
import TodoItem from "./TodoItem";

interface ITodoItems {
  todos: ITodo[];
  checkTodo: ICheckTodo;
  removeTodo: IRemoveTodo;
  editTodo: IEditTodo;
}

const list: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.3,
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const noItem = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.5 } },
};
const TodoItems: React.FC<ITodoItems> = ({
  todos,
  editTodo,
  checkTodo,
  removeTodo,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`items ${!todos.length && "no-items"}`}
      variants={list}
    >
      <AnimatePresence>
        {todos?.length > 0 ? (
          todos.map(todo => (
            <motion.div
              key={todo.id}
              variants={item}
              exit={{ opacity: 0, x: -100 }}
            >
              <TodoItem
                {...todo}
                removeTodo={removeTodo}
                checkTodo={checkTodo}
                editTodo={editTodo}
              ></TodoItem>
            </motion.div>
          ))
        ) : (
          <motion.div variants={noItem}>Plan something {":)"}</motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TodoItems;
