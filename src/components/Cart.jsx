import Modal from "./UI/Modal.jsx";
import CartItem from "./CartItem.jsx";
import './Cart.css'

export default function Cart() {
  return (
    <Modal className="cart" open={true} onClose={null}>
      <h2>Your Cart</h2>
      <ul>
        <CartItem />
      </ul>
      <p className="cart-total">34</p>
      <p className="modal-actions">
        <button>Close</button>
        <button>Checkout</button>
      </p>
    </Modal>
  );
}
