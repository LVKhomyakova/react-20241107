import { Container } from "../../ui/container/Container.jsx";
import classes from './Header.module.css'
import { Text } from "../../ui/text/Text.jsx";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <Text type="h1">Restaurant service</Text>
      </Container>
    </header>
  )
}