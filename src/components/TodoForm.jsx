import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTodo } from "../store/todo/todoThunk";
import { ActionTypeTodo } from "../store/todo/todoReducer";
export const TodoForm = () => {
  const [value, setValue] = useState("");
  const { selectValue } = useSelector((state) => state.todo);
  console.log("selectValue: ", selectValue);

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: value,
      completed: false,
      edit: false,
    };

    dispatch(postTodo(data));
    setValue("");
  };

  const selectChangeHandler = (event) => {
    dispatch({
      type: ActionTypeTodo.SELECT_VALUE,
      payload: event.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add</button>
      </form>
      <select value={selectValue} onChange={selectChangeHandler}>
        <option value="все">Все</option>
        <option value="completed">completed</option>
        <option value="unCompleted">uncompleted</option>
      </select>
    </div>
  );
};
