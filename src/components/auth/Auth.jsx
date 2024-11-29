import { Text } from "../ui/text/Text.jsx";
import { Button } from "../ui/button/Button.jsx";
import classes from './Auth.module.css'
import { useAuth } from "../../contexts/auth-context/use-auth.js";

const USER_MOCK = {
  fullName: 'Иванов Иван Иванович'
};

export const Auth = () => {
  const { isLoggedIn, user, login, logout} = useAuth();

  return (
    <>
      {isLoggedIn &&
        <div className={classes.auth}>
          <Text>{user.fullName}</Text>
          <Button variant="contained" color="primary" onClick={logout}>Logout</Button>
        </div>
      }
      {!isLoggedIn && <Button variant="contained" color="primary" onClick={() => login(USER_MOCK)}>Login</Button>}
    </>
  );
}