import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReadonlyRating from "./UI/ReadonlyRating.jsx";
import { useNavigate } from "react-router";

export default function ProductItem() {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/menu/detail`)
  }

  return (
    <li onClick={handleClick} className="product-item">
      <article>
        <img src=".\src\images\Food.jpg" />
        <div>
          <h3>Burger</h3>
          <p className="product-item-price">
            {/* {currencyFormatter.format(meal.price)} */}35$
          </p>
          <p className="product-item-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            dicta suscipit minima excepturi fuga eveniet sequi aut consequatur
            vel numquam!
          </p>
          <ReadonlyRating value={5} />
          <div className="icon-cart-box">
            <FavoriteBorderIcon />
            <button className="product-item-button">Add to Cart</button>
          </div>
        </div>
      </article>
    </li>
  );
}
