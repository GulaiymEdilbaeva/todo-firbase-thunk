export const ActionTypeTodo = {
  GET_TODO: "GET_TODO",
  SELECT_VALUE: "SELECT_VALUE",
};

const initialState = {
  items: [],
  selectValue: "все",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeTodo.GET_TODO: {
      if (state.selectValue === "все") {
        return { ...state, items: action.payload };
      }
      if (state.selectValue === "completed") {
        return {
          ...state,
          items: action.payload.filter((item) => item.completed === true),
        };
      }
      if (state.selectValue === "unCompleted") {
        return {
          ...state,
          items: action.payload.filter((item) => item.completed === false),
        };
      }
    }

    case ActionTypeTodo.SELECT_VALUE:
      return { ...state, selectValue: action.payload };
    default:
      return state;
  }
};
