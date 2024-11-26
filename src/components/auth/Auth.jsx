import { Text } from "../ui/text/Text.jsx";
import { Button } from "../ui/button/Button.jsx";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context/auth-context.jsx";
import classes from './Auth.module.css'

export const Auth = () => {
  const { isLoggedIn, user, login, logout} = useContext(AuthContext);

  const userMock = {
    fullName: 'Иванов Иван Иванович'
  };

  return (
    <>
      {isLoggedIn &&
        <div className={classes.auth}>
          <Text>{user.fullName}</Text>
          <Button variant="contained" color="primary" onClick={logout}>Logout</Button>
        </div>
      }
      {!isLoggedIn && <Button variant="contained" color="primary" onClick={() => login(userMock)}>Login</Button>}
    </>
  );
}