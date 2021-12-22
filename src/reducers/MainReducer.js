export const MainReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COUNTRIES":
      return action.payload.counties;

    default:
      return state;
  }
};

//http://localhost:3000/
