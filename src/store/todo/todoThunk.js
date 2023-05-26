import { ActionTypeTodo } from "./todoReducer";

const BASE_URL = "https://todoo-daac0-default-rtdb.firebaseio.com/todo";

export const getTodo = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}.json`);
      const data = await response.json();

      const result = [];

      for (const key in data) {
        result.push({
          id: key,
          title: data[key].title,
          completed: data[key].completed,
          edit: data[key].edit,
        });
      }

      dispatch({ type: ActionTypeTodo.GET_TODO, payload: result });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const postTodo = (data) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      dispatch(getTodo());
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const putCompletedTodo = (data) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}/${data.id}.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      dispatch(getTodo());
    } catch (error) {
      console.log("error", error);
    }
  };
};

//putEditOpenTodo
// const putEditOpenTodo = (data) => {
//   return async (dispatch) => {
//     try {
//       await fetch(`${BASE_URL}/${data.id}.json`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       dispatch(getTodo());
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
// };

//editSaveHandler

export const putEditSaveTodo = (data) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}/${data.id}.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      dispatch(getTodo());
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}/${id}.json`, {
        method: "DELETE",
      });
      dispatch(getTodo());
    } catch (error) {
      console.log(error);
    }
  };
};
