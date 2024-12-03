import { useState } from "react";
import { AuthContext } from "./auth-context.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/cart-slice.js";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const ctxValue = {
    user,
    login: (user) => setUser(user),
    logout: () => {
      setUser(null);
      dispatch(clearCart());
    },
    isLoggedIn: !!user,
  }

  return (
    <AuthContext.Provider value={ctxValue}>
      {children}
    </AuthContext.Provider>
  );
};