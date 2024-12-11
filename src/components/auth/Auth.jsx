import { Text } from "../ui/text/Text.jsx";
import { Button } from "../ui/button/Button.jsx";
import classes from './Auth.module.css'
import { useAuth } from "../../contexts/auth-context/use-auth.js";
import { useGetUsersQuery } from "../../redux/services/api/index.js";
import { useState } from "react";

export const Auth = () => {
  const [ isUserSelecting, setisUserSelecting ] = useState();
  const { isLoggedIn, user, login, logout} = useAuth();
  const { data} = useGetUsersQuery();

  const switchSelection = () => {
    setisUserSelecting(prev => !prev);
  }

  const selectUser = (userId) => {
    login(data?.find(user => user.id === userId));
    switchSelection();
  }

  return (
    <>
      {isLoggedIn &&
        <div className={classes.auth}>
          <Text type="h3">{user.name}</Text>
          <Button variant="contained" color="primary" onClick={logout}>Logout</Button>
        </div>
      }
      {!isLoggedIn && <Button variant="contained" color="primary" onClick={switchSelection}>Login</Button>}
      {isUserSelecting &&
        <select onChange={(e) => selectUser(e.target.value)}>
          <option></option>
          {data?.length && data.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
      }
    </>
  );
}