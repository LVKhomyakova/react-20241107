import { Header } from "./header/Header.jsx";
import { Footer } from "./footer/Footer.jsx";
import { Content } from "./content/Content.jsx";

export const Layout = () => {
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  );
};