import Modal from "./UI/Modal.jsx";
import CartItem from "./CartItem.jsx";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice.js";
import { Link } from "react-router-dom";

export default function Cart() {
  const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  function closeCart() {
    dispatch(uiActions.toggle());
  }

  function goToCheckout() {
    dispatch(uiActions.toggle());
    dispatch(uiActions.goToCheckout());
  }

  return (
    <Modal className="cart" open={isCartVisible} onClose={null}>
      <h2>Your Cart</h2>
      <ul>
        <CartItem />
      </ul>
      {totalPrice > 0 ? (
        <p className="cart-total">
          {totalPrice > 1 ? totalPrice.toFixed(2) : 0}$
        </p>
      ) : (
        <div>
          <p>You did not add any product yet. </p>
          <p> Please go to the menu for ordering food.</p>
        </div>
      )}
      <p className="modal-actions">
        <button onClick={closeCart}>Close</button>
        {totalPrice > 0 ? (
          <button onClick={goToCheckout}>Checkout</button>
        ) : (
          <Link to={"/menu"}>
            <button onClick={closeCart}>Menu</button>
          </Link>
        )}
      </p>
    </Modal>
  );
}
