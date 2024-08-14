import "./MainNavigation.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import logo from "../../../public/logo.jpg";

function MainNavigation() {
  const [active, setActive] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  function handleClick() {
    setActive(!active);
  }

  function showCart() {
    dispatch(uiActions.toggle());
  }

  return (
    <div className="header">
      <div className="title">
        <img src={logo} style={{ width: 30 }} />
        <h2>
          Masal<span className="logo-text">Food</span>
        </h2>
      </div>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="forLin">
        <NavLink
          to="/favorites"
          className={({ isActive }) => {
            isActive ? setActive(true) : setActive(false);
          }}
        >
          <FavoriteBorderIcon
            onClick={handleClick}
            className={active ? "active" : ""}
          />
        </NavLink>
        <button onClick={showCart} className="cart-button">
          Cart ({totalQuantity})
        </button>
      </div>
    </div>
  );
}

export default MainNavigation;
