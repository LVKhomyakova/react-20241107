import classes from './Footer.module.css';
import { Text } from '../../ui/text/Text.jsx';

export const Footer = () => {
  return (
    <footer className={classes.footerWrapper}>
      <div className="container">
        <div className={classes.footer}>
          <Text color="light">Designed By</Text>
          <Text color="primary">LVKhomyakova</Text>
        </div>
      </div>
    </footer>
);
}