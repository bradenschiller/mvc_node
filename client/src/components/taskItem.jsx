import React from "react";

const taskItem = ({ taskName, completed }) => {
  return (
    <div className="bg-white rounded-lg flex items-center shadow p-2 m-4 w-3/4">
      <input type="checkbox" name="listCheckbox" checked={completed} />
      <div className="ml-2">{taskName}</div>
    </div>
  );
};

export default taskItem;
