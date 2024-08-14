import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProductDetails.css";
import ReadonlyRating from "./UI/ReadonlyRating";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { uiActions } from "../store/ui-slice";

function ProductDetails() {
  const location = useLocation();

  const { id, name, price, description, rating, image } = location.state;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favorites = useSelector((state) => state.ui.favorites);
  const isFavorite = favorites[id];

  const dispatch = useDispatch();

  const cartItem = cartItems?.find((item) => item.id === id);

  function addFavorite() {
    dispatch(
      uiActions.addFavorite({ id, name, price, description, rating, image })
    );
  }

  function removeFavorite() {
    dispatch(uiActions.removeFavorite(id));
  }

  function handleIncrease(id, name, price) {
    dispatch(cartActions.addItem({ id, name, price }));
    console.log(cartItem.quantity);
  }

  function handleDecrease(id) {
    dispatch(cartActions.removeItemFromCart({ id }));
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-container-left">
        <img
          src={`http://10.243.100.1:8080/${image}`}
          width={400}
          height={350}
        />
      </div>
      <div className="product-detail-container-right">
        <h1>{name}</h1>
        <p>{description}</p>
        <p style={{ fontSize: 18 }}>{price}$</p>
        <div className="fav-rate">
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
          <ReadonlyRating value={rating} />{" "}
        </div>

        <div className="product-detail-button-box">
          <button onClick={() => handleDecrease(id)}>-</button>
          <span>{cartItem?.quantity ? cartItem.quantity : 0}</span>
          <button onClick={() => handleIncrease(id, name, price)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
