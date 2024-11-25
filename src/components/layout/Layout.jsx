import { Header } from "./header/Header.jsx";
import { Footer } from "./footer/Footer.jsx";
import { ScrollProgress } from "../ui/scroll-progress/ScrollProgress.jsx";

export const Layout = ({children}) => {
  return (
    <>
      <ScrollProgress/>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};