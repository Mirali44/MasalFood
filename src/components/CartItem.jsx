import { useSelector, useDispatch } from "react-redux";
import "./CartItem.css";
import { cartActions } from "../store/cart-slice";

export default function CartItem() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncrease = (id, name, price) => {
    dispatch(cartActions.addItem({ id, name, price }));
  };

  const handleDecrease = (id) => {
    dispatch(cartActions.removeItemFromCart({ id }));
  };

  return (
    <ul className="cart-item-list">
      {cartItems.map((item) => (
        <li className="cart-item" key={item.id}>
          <p>
            {item.name} - {item.quantity} x {item.price}$
          </p>
          <p className="cart-item-actions">
            <button onClick={() => handleDecrease(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button
              onClick={() => handleIncrease(item.id, item.name, item.price)}
            >
              +
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
}
