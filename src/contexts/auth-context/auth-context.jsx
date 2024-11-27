import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const ctxValue = {
    user,
    login: (user) => setUser(user),
    logout: () => setUser(null),
    isLoggedIn: !!user,
  }

  return (
    <AuthContext.Provider value={ctxValue}>
      {children}
    </AuthContext.Provider>
  );
};