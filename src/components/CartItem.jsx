import "./CartItem.css"

export default function CartItem() {
  return (
    <li className="cart-item">
      <p>
        Lorem ipsum dolor sit amet. - 1 5$
      </p>
      <p className="cart-item-actions">
        <button>-</button>
        <span>1</span>
        <button >+</button>
      </p>
    </li>
  );
}