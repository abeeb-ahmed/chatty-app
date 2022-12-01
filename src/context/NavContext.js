import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  isOpen: false,
};

export const MobileNavContext = createContext();
export const MobileNavContextProvider = ({ children }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE":
        return {
          isOpen: !state.isOpen,
        };
      case "CLOSE":
        return {
          isOpen: false,
        };

      default:
        break;
    }
  };

  const [state, navDispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <MobileNavContext.Provider value={{ state, navDispatch }}>
      {children}
    </MobileNavContext.Provider>
  );
};
