import ProductItem from "./ProductItem";
import "./ProductItem.css";
import { useNavigate } from "react-router";

function FeaturedProducts() {
  const navigate = useNavigate()
  
  function handleClick() {
    navigate('/menu')
  }
  return (
    <div className="featured-product-container">
      <h2>Featured Products</h2>
      {/* <div className="inner-featured-product-container"> */}
        <ul id="meals">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ul>
        <div className="featured-menu-box">
          <p>See all the products!</p>
          <button onClick={handleClick} className="featured-button">Menu</button>
        </div>
      </div>
    // </div>
  );
}

export default FeaturedProducts;
