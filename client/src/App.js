import "./App.css";
import TaskItem from "./components/taskItem";
import { useQuery } from "react-query";
import AddTaskBar from "./components/AddTaskBar";

const getTasks = async () => {
  const res = await fetch("http://localhost:8080/todo");

  return res.json();
};

const App = () => {
  const { data } = useQuery("tasks", getTasks);

  return (
    <div className="flex items-center flex-col dark:bg-gray-700">
      <h2 className="text-3xl text-blue-500 dark:text-blue-200">Todo List</h2>
      <AddTaskBar />
      {data &&
        data.map((task) => {
          return <TaskItem key={task.taskId} {...task} />;
        })}
    </div>
  );
};

export default App;
