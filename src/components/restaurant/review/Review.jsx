import { Text } from "../../ui/text/Text.jsx";
import classes from './Review.module.css';
import { useSelector } from "react-redux";
import { selectUserById } from "../../../redux/entities/users/users-slice.js";

export const Review = ({review}) => {
  const user = useSelector((state) => selectUserById(state, review.userId));
  return (
    <div className={classes.review}>
      <div className={classes.userInfo}>
        <img className={classes.image} src={user.image} alt="user image"/>
        <i className={classes.icon}></i>
        <div className={classes.name}>
          <Text type="subtitle" color="dark">{user.name}</Text>
        </div>
      </div>

      <div>
        {[1, 2, 3, 4, 5].map((v) =>
          <span key={v} style={{color: v <= review.rating ? 'orange' : 'gray', fontSize: '30px'}}>★</span>
        )}
      </div>

      <Text>{review.text}</Text>
    </div>
  )
}
