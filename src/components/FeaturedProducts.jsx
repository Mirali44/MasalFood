import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import "./ProductItem.css";
import "./FeaturedProducts.css";
import { useNavigate } from "react-router";

function FeaturedProducts() {
  const navigate = useNavigate();
  const featuredMealsData = useSelector((state) => state.meal.featuredItems);

  function handleClick() {
    navigate("/menu");
  }
  return (
    <div className="featured-product-container">
      <h2>Featured Products</h2>
      <ul id="meals">
        {featuredMealsData.map((meal) => (
          <ProductItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            price={meal.price}
            rating={meal.rating}
            description={meal.description}
            image={meal.image}
          />
        ))}
      </ul>
      <div className="featured-menu-box">
        <p>See all the products!</p>
        <button onClick={handleClick} className="featured-button">
          See the Menu
        </button>
      </div>
    </div>
  );
}

export default FeaturedProducts;
