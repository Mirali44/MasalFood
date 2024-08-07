import Modal from "./UI/Modal.jsx";

import Input from "./UI/Input.jsx";
import "./Checkout.css";

export default function Checkout() {
  return (
    <Modal className="checkout-container" open={true}>
      <form className="checkout-form">
        <h2>Checkout</h2>
        <p>
          Total Amount: 35$
        </p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <Input label="City" type="text" id="city" />

        <p className="modal-actions">{}</p>
        <button className="checkout-button">Submit Order</button>
      </form>
    </Modal>
  );
}
