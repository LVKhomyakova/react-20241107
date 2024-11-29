import { Container } from "../../ui/container/Container.jsx";
import classes from "./Nav.module.css"
import { TabButtonContainer } from "../../ui/tab-button/TabButton-container.jsx";

export const Nav = ({currId, ids, handleMenuClick}) => {
  return (
    <div>
      <Container>
        <nav className={classes.nav}>
          {ids.map((id) => <TabButtonContainer key={id} id={id} isActive={currId === id} onClick={handleMenuClick}/>)}
        </nav>
      </Container>
    </div>
  );
};