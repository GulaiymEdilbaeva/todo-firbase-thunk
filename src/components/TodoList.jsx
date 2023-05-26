import React from "react";
import { TodoItem } from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  putCompletedTodo,
  putEditSaveTodo,
} from "../store/todo/todoThunk";

export const TodoList = () => {
  const { items } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const completedHandler = (data) => {
    const result = {
      ...data,
      completed: !data.completed,
    };
    dispatch(putCompletedTodo(result));
  };

  const editSaveHandler = (data, title) => {
    const result = {
      ...data,
      edit: false,
      title: title,
    };
    dispatch(putEditSaveTodo(result));
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {items?.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          completedHandler={completedHandler}
          editSaveHandler={editSaveHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};
