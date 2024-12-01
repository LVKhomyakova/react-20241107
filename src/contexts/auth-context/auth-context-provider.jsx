import { useState } from "react";
import { AuthContext } from "./auth-context.js";

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