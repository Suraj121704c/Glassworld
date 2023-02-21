import React from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState("");

  const login = (token) => {
    setToken(token);
    setIsAuth(true);
  };

  const logout = () => {
    setToken("");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuth, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
