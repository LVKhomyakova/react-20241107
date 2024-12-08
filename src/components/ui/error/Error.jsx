import classes from './Error.module.css';
import { Text } from "../text/Text.jsx";

export const Error = ({ message }) => {
  return (
    <div className={classes.error}>
      <Text type="subtitle" color="error">{message}</Text>
    </div>
  );
}
