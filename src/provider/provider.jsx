import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialUserValue = () => {
  const item = localStorage.getItem("profile");
  if (item) {
    return JSON.parse(atob(item));
  }

  return {};
};

const initialState = {
  user: initialUserValue()
};

export const useAppContext = () => {
  return useContext(AppContext);
};

const reducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      ...state,
      user: action.value,
    };
  }  
  return state;
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{ user: state.user, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};
