import "../components/ProductItem.css";
import "./FavoritesList.css";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function FavoritesList() {
  const favorites = useSelector((state) => state.ui.favorites);
  const favoriteItems = Object.values(favorites);

  return (
    <div className="favorites-container">
      <h1>Your Favorites</h1>
      {favoriteItems.length > 0 ? (
        <ul className="meals-container">
          {favoriteItems.map((meal) => (
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
      ) : (
        <p>No favorite items found.</p>
      )}
    </div>
  );
}

export default FavoritesList;
