import "./App.css";
import TaskItem from "./components/taskItem";
import { useQuery } from "react-query";

const getTasks = async () => {
  const res = await fetch("http://localhost:8080/todo");

  return res.json();
};

const App = () => {
  const { data } = useQuery("tasks", getTasks);

  return (
    <div className="flex items-center flex-col">
      <h2 className="text-3xl text-blue-400">Todo List</h2>
      {data &&
        data.map(({ taskId, taskName, completed }) => {
          return (
            <TaskItem key={taskId} taskName={taskName} completed={completed} />
          );
        })}
    </div>
  );
};

export default App;
