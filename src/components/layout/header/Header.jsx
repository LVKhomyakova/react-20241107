import { Container } from "../../ui/container/Container.jsx";
import classes from './Header.module.css'
import { Text } from "../../ui/text/Text.jsx";
import { Auth } from "../../auth/Auth.jsx";
import { ThemeSwitcher } from "../../ui/theme-switcher/theme-switcher.jsx";

export const Header = () => {
  return (
    <header className={classes.headerWrapper}>
      <Container>
        <div className={classes.header}>
          <Text type="h1">Restaurant service</Text>
          <div className={classes.headerActions}>
            <ThemeSwitcher/>
            <Auth/>
          </div>
        </div>
      </Container>
    </header>
  )
}