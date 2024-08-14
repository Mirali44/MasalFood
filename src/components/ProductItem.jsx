import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReadonlyRating from "./UI/ReadonlyRating.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice.js";
import { uiActions } from "../store/ui-slice.js";

// eslint-disable-next-line react/prop-types
export default function ProductItem(meal) {
  const { id, name, price, description, rating, image } = meal;

  const favorites = useSelector((state) => state.ui.favorites);
  const isFavorite = favorites[id];

  const dispatch = useDispatch();

  function addFavorite() {
    dispatch(
      uiActions.addFavorite({ id, name, price, description, rating, image })
    );
  }

  function removeFavorite() {
    dispatch(uiActions.removeFavorite(id));
  }

  const isAdded = useSelector((state) =>
    state.cart.cartItems.some((item) => item.id === id)
  );

  function addToCart() {
    if (!isAdded) {
      dispatch(cartActions.addItem({ id, name, price }));
    }
    console.log(name);
  }

  return (
    <li className="product-item">
      <article>
        <Link to={"/menu/detail"} state={meal}>
          <img src={`http://10.243.100.1:8080/${image}`} alt={name} />
        </Link>
        <div>
          <h3>{name}</h3>
          <p className="product-item-price">{price}$</p>
          <p className="product-item-description">{description}</p>
          <ReadonlyRating value={rating} />
          <div className="icon-cart-box">
            {isFavorite ? (
              <FavoriteIcon
                style={{ cursor: "pointer" }}
                onClick={removeFavorite}
              />
            ) : (
              <FavoriteBorderIcon
                style={{ cursor: "pointer" }}
                onClick={addFavorite}
              />
            )}

            <button
              className="product-item-button"
              onClick={addToCart}
              disabled={isAdded}
            >
              {isAdded ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </article>
    </li>
  );
}
