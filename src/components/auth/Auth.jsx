import { Text } from "../ui/text/Text.jsx";
import { Button } from "../ui/button/Button.jsx";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context/auth-context.jsx";
import classes from './Auth.module.css'

const USER_MOCK = {
  fullName: 'Иванов Иван Иванович'
};

export const Auth = () => {
  const { isLoggedIn, user, login, logout} = useContext(AuthContext);

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