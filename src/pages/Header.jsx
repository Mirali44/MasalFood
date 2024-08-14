import "./Header.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

function Header() {
  const dispatch = useDispatch();

  function openCart() {
    dispatch(uiActions.toggle());
  }

  return (
    <div className="header">
      <h2>
        Masal<span className="logo-text">Food</span>
      </h2>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="forLin">
        <a>
          <FavoriteBorderIcon />
        </a>
        <a>
          <MenuOutlinedIcon />
        </a>
        <button onClick={openCart}>Cart 0</button>
      </div>
    </div>
  );
}

export default Header;
