import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import "./ProductDetails.css";
import ReadonlyRating from "./UI/ReadonlyRating";
import foodj from '/src/images/Food.jpg'

function ProductDetails() {
  return (
    <div className="product-detail-container">
      <div className="product-detail-container-left">
        <img src={foodj} width={400} height={350} />
      </div>
      <div className="product-detail-container-right">
        <h1>Product Name</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus quasi perspiciatis, quia enim incidunt tempore quidem
          cupiditate atque nisi voluptas.
        </p>
        <p style={{fontSize: 18}}>15$</p>
        <div className="fav-rate">
          <FavoriteBorder />
          <ReadonlyRating value={5} />{" "}
        </div>

        <div className="product-detail-button-box">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
