import './Header.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h2>Masal<span className='logo-text'>Food</span></h2>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="forLin">
        <a><FavoriteBorderIcon /></a>
        <a><MenuOutlinedIcon /></a>
        <a>Cart 0</a>
      </div>
    </div>
  );
}

export default Header;
