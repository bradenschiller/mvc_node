import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const TaskItem = (task) => {
  const { taskName, taskId, completed } = task;
  const [checked, setChecked] = useState(completed);
  const queryClient = useQueryClient();
  const mutation = useMutation((newTask) => {
    return axios.put(`http://localhost:8080/todo/${taskId}`, newTask);
  });

  const deleteMutation = useMutation(
    () => {
      return axios.delete(`http://localhost:8080/todo/${taskId}`);
    },
    {
      onSuccess: ({ data }) => {
        queryClient.setQueryData("tasks", data);
      },
    }
  );

  const handleChecked = () => {
    // TODO: rework logic to not have to use two state changes
    mutation.mutate({ ...task, completed: !checked });

    setChecked(!checked);

    return mutation.isSuccess ? setChecked(mutation.data.completed) : null;
  };

  return (
    <div className="bg-white rounded-lg flex items-center justify-between shadow p-2 m-4 w-3/4">
      <div className="flex items-center">
        <input
          type="checkbox"
          name="listCheckbox"
          checked={checked}
          onChange={handleChecked}
        />
        <div className="ml-2">{taskName}</div>
      </div>
      <div className="mr-4">
        <button
          onClick={() => deleteMutation.mutate()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
