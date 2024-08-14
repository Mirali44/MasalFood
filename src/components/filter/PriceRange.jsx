import "./PriceRange.css";
import { useDispatch, useSelector } from "react-redux";
import { mealActions } from "../../store/meal-slice";
import { filtersActions } from "../../store/filter-slice";

const DropdownSlider = () => {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.filters.price);

  const handlePriceChange = (event) => {
    dispatch(
      filtersActions.setPrice({
        price: event.target.value,
      })
    );
    dispatch(
      mealActions.sortByPrice({
        price: event.target.value,
      })
    );
  };

  return (
    <div className="dropdown">
      <p className="dropbtn">Select Price Range</p>
      <div className="dropdown-content">
        <label htmlFor="priceRange">Price Range:</label>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="0"
          max="20"
          step="1"
          value={price}
          onChange={handlePriceChange}
        />
        <span id="price-value">${price}</span>
      </div>
    </div>
  );
};

export default DropdownSlider;
