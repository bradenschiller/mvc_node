import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const AddTaskBar = () => {
  const [task, setTask] = useState("");
  const queryClient = useQueryClient();

  const handleChange = (e) => setTask(e.target.value);

  const addTaskMutation = useMutation(
    (newTask) => {
      return axios.post("http://localhost:8080/todo", newTask);
    },
    {
      onSuccess: ({ data }) => {
        queryClient.setQueryData("tasks", data);
      },
    }
  );

  const handleSubmit = () => {
    if (task.length) {
      addTaskMutation.mutate({ taskName: task });
    }

    setTask("");
  };

  return (
    <div className="flex items-center space-x-2 > *">
      <input
        onChange={handleChange}
        className="border-green py-1 px-2"
        type="text"
        placeholder="Add Task"
        value={task}
      />
      <button
        onClick={handleSubmit}
        className="bg-green-600 hover:bg-green-800 text-white px-4 py-1 rounded-md"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskBar;
