import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice } from "../../redux/cart/cart-slice.js";
import { CartItem } from "../cart-item/CartItem.jsx";
import { ContainerWrapper } from "../ui/container-wrapper/ContainerWrapper.jsx";
import { Container } from "../ui/container/Container.jsx";
import { Text } from "../ui/text/Text.jsx";
import classes from './Cart.module.css';

export const Cart = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  if (!items.length) {
    return null;
  }

  return (
    <ContainerWrapper>
      <Container>
        <Text type="title" color="primary">Корзина</Text>

        <ul className={classes.cart}>
          {items.map(({id}) => (
            <li key={id}>
              <CartItem id={id}/>
            </li>
          ))}
        </ul>

        <div className={classes.total}>
          <Text type="subtitle" color="dark">Итого: </Text>
          <Text type="subtitle" color="dark">{totalPrice}$</Text>
        </div>
      </Container>
    </ContainerWrapper>
  );
};