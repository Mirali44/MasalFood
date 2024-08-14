import ProductItem from "../components/ProductItem";
import "./Menu.css";
import "../components/ProductItem.css";
import { useSelector, useDispatch } from "react-redux";
import TemporaryDrawer from "../components/UI/Drawer.jsx";
import { useEffect } from "react";
import { fetchMeals } from "../store/meal-action.js";

function Menu() {
  const mealsData = useSelector((state) => state.meal.filteredItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  return (
    <div className="menu-container">
      <TemporaryDrawer />
      <ul className="meals-container">
        {mealsData.map((meal) => (
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
    </div>
  );
}

export default Menu;
