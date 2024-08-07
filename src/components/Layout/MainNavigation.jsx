import "./MainNavigation.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
//import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { NavLink } from "react-router-dom";
import { useState } from "react";

function MainNavigation() {
  const [active, setActive] = useState(false)
  function handleClick() {
    setActive(!active)
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
        <NavLink
          to="/favorites"
          className={({ isActive }) => {
            //isActive ? "active" : "";
            isActive ? setActive(true) : setActive(false)
          }}
        >
          <FavoriteBorderIcon onClick={handleClick} className={active ? "active" : ""} />
        </NavLink>
        {/* <a><MenuOutlinedIcon /></a> */}
        <button className="cart-button">Cart (0)</button>
      </div>
    </div>
  );
}

export default MainNavigation;
