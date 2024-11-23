import { Text } from "../../ui/text/Text.jsx";
import classes from './Review.module.css';

export const Review = ({review}) => {
  return (
    <div className={classes.review}>
      <div>
        <Text type="subtitle" color="dark">{review.user}</Text>

      </div>

      <div>
        {[1, 2, 3, 4, 5].map((v) =>
          <span key={v} style={{color: v <= review.rating ? 'orange' : 'gray', fontSize: '30px'}}>★</span>
        )}
      </div>

      <Text>&quot;{review.text}&quot;</Text>
    </div>
  )
}