export const initialState = {
  userdata: {
    email: "",
    name: "",
    phone: "",
  },
};
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "init_stored": {
      return action.value;
    }
    case "updateuser": {
      return {
        ...state,
        userdata: action.value,
      };
    }
  }
};
