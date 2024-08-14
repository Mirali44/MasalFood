import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { mealActions } from "../../store/meal-slice.js";
import { filtersActions } from "../../store/filter-slice.js";

const Categories = () => {
  const selectedCategory = useSelector(
    (state) => state.filters.selectedCategory
  );
  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
    dispatch(
      filtersActions.setSelectedCategory({
        category: event.target.value,
      })
    );
    dispatch(
      mealActions.sortByCategory({
        category: event.target.value,
      })
    );
  };

  return (
    <div className="category-content">
      <p>Select Category</p>
      {[
        "Fastfood",
        "Pasta",
        "Steaks",
        "Seafood",
        "Soups",
        "Salads",
        "Sweetie",
      ].map((value) => (
        <label key={value}>
          <input
            type="radio"
            value={value}
            checked={selectedCategory === value}
            onChange={handleOptionChange}
          />
          <span className="custom-radio"></span>
          {value}
        </label>
      ))}
    </div>
  );
};

export default Categories;
