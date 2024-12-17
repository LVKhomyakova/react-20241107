'use client';
import { Header } from "./header/Header.jsx";
import { Footer } from "./footer/Footer.jsx";
import { ScrollProgress } from "../ui/scroll-progress/ScrollProgress.jsx";
import { useAuth } from "../../contexts/auth-context/use-auth.js";
import { Cart } from "../cart/Cart.jsx";

export const Layout = ({children}) => {
  const {isLoggedIn} = useAuth();

  return (
    <>
      <ScrollProgress/>
      <Header/>
      {children}
      {isLoggedIn && <Cart />}
      <Footer/>
    </>
  );
};