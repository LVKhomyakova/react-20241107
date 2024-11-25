import { Text } from '../../ui/text/Text.jsx';
import { Container } from "../../ui/container/Container.jsx";
import classes from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={classes.footerWrapper}>
      <Container>
        <div className={classes.footer}>
          <Text color="light">Designed By</Text>
          <Text color="primary">LVKhomyakova</Text>
        </div>
      </Container>
    </footer>
);
}