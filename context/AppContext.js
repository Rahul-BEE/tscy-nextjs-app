import { createContext, useContext, useMemo } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [appState, setAppState] = useState({});

  const contextValue = useMemo(() => {
    return [appState, setAppState];
  }, [appState, setAppState]);
}
