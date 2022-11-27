import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  isOpen: false,
};

export const MobileNavContext = createContext(INITIAL_STATE);

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

export const MobileNavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <MobileNavContext.Provider value={{ state, dispatch }}>
      {children}
    </MobileNavContext.Provider>
  );
};
