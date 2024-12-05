import { Container } from "../container/Container.jsx";
import { TabButton } from "../tab-button/TabButton.jsx";
import classes from "./Nav.module.css";

export const Nav = ({items}) => {
  return (
    <Container>
      <nav className={classes.nav}>
        {items.map((item) => <TabButton key={item.id} path={item.path}>{item.name}</TabButton>)}
      </nav>
    </Container>
  );
}