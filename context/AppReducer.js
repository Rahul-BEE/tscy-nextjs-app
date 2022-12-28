export const initialState = {
  userdata: {
    email: "",
    name: "",
    phone: "",
  },
  district: "",
  showbModal: false,
};
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "init_stored": {
      return { ...state, userdata: action.value };
    }
    case "updateuser": {
      return {
        ...state,
        userdata: action.value,
      };
    }
    case "updatedistrict": {
      return {
        ...state,
        district: action.value,
      };
    }
    case "resetdistrict": {
      return {
        ...state,
        district: "",
      };
    }
    case "showbmodal": {
      return {
        ...state,
        showbModal: action.value,
      };
    }
  }
};
