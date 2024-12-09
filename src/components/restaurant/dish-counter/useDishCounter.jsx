import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem, selectCartItemCountById } from "../../../redux/ui/cart/cart-slice.js";

export const useDishCounter = (id) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectCartItemCountById(state, id)) || 0;

  const increase = () => dispatch(addCartItem(id));
  const decrease = () => dispatch(removeCartItem(id));

  return {
    count,
    increase,
    decrease
  }
}