import { mealActions } from "./meal-slice";

export const fetchMeals = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "http://10.243.100.1:8080/api/products/get-all-products"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch meals");
      }

      const { data } = await response.json();
      return data;
    };

    try {
      const mealData = await fetchData();

      dispatch(
        mealActions.replaceMeals({
          items: mealData || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchFeaturedMeals = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "http://10.243.100.1:8080/api/products/get-featured-products"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch meals");
      }

      const { data } = await response.json();
      return data;
    };

    try {
      const mealData = await fetchData();

      dispatch(
        mealActions.replaceFeaturedMeals({
          items: mealData || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
