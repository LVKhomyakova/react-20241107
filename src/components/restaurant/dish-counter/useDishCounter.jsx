import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem, selectCartItemCountById } from "../../../redux/ui/cart/cart-slice.js";

export const useDishCounter = (dish) => {
  const dispatch = useDispatch();
  const {count} = useSelector((state) => selectCartItemCountById(state, dish.id)) || 0;

  const increase = () => dispatch(addCartItem({id: dish.id, price: dish.price}));
  const decrease = () => dispatch(removeCartItem(dish.id));

  return {
    count,
    increase,
    decrease
  }
}