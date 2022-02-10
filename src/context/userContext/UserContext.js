import UserReducer from "./UserReducer";
import { createContext, useReducer, useEffect } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isBangla: JSON.parse(localStorage.getItem("isBangla")) === null ? false : JSON.parse(localStorage.getItem("isBangla")),
  isFetching: false,
  error: false,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isBangla: state.isBangla,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
