import React, { useState } from "react";

export const TodoItem = ({
  item,
  completedHandler,
  editSaveHandler,
  deleteHandler,
}) => {
  const [editValue, setEditValue] = useState(item.title);
  const [editOpen, setEditOpen] = useState(false);

  const editOpenHandler = () => {
    setEditOpen(true);
  };
  const saveEditTodo = (event) => {
    event.preventDefault();
    editSaveHandler(item, editValue);
    setEditOpen(false);
  };
  return (
    <div>
      {!editOpen ? (
        <div>
          <p style={item.completed ? { color: "red" } : { color: "blue" }}>
            {" "}
            {item.title}
          </p>
          <button onClick={() => completedHandler(item)}>completed</button>
          <button onClick={() => deleteHandler(item.id)}>delete</button>
          <button onClick={editOpenHandler}>edit</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={saveEditTodo}>save</button>
        </div>
      )}
    </div>
  );
};
