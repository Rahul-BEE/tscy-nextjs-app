import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { AppReducer, initialState } from "./AppReducer";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("userdata"))) {
      dispatch({
        type: "init_stored",
        value: JSON.parse(sessionStorage.getItem("userdata")),
      });
    }
  }, []);
  useEffect(() => {
    if (state !== initialState) {
      sessionStorage.setItem("userdata", JSON.stringify(state.userdata));
    }
  }, [state]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
