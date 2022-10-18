export const initialState = {
  userdata: {
    email: "",
    name: "",
    phone: "",
  },
};
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "updateuser": {
      return {
        ...state,
        userdata: action.value,
      };
    }
  }
};
