import classes from './Footer.module.css';
import { Text } from '../../text/Text.jsx'

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Text type="light">Designed By</Text>
      <Text type="primary">LVKhomyakova</Text>
    </footer>
  );
}