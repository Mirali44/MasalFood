import { useState } from "react";
import Modal from "./UI/Modal.jsx";
import Input from "./UI/Input.jsx";
import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice.js";
import { postOrder } from "./util/http.js";
import { cartActions } from "../store/cart-slice.js";

export default function Checkout() {
  const isCheckoutVisible = useSelector((state) => state.ui.checkoutIsVisible);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  function submitCheckout(event) {
    event.preventDefault();

    const order = {
      orderItems: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
      customer: {
        name: name,
        email: email,
        street: street,
        city: city,
      },
    };

    postOrder(order);
    dispatch(
      cartActions.refreshCart({
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
      })
    );
    dispatch(uiActions.goToCheckout());
  }

  return (
    <Modal className="checkout-container" open={isCheckoutVisible}>
      <form className="checkout-form" onSubmit={submitCheckout}>
        <h2>Checkout</h2>
        <p>Total Amount: {totalPrice.toFixed(2)}$</p>

        <Input
          label="Full Name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="E-Mail Address"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Street"
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <Input
          label="City"
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <p className="modal-actions"></p>
        <button className="checkout-button" type="submit">
          Submit Order
        </button>
      </form>
    </Modal>
  );
}
