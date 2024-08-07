import ProductItem from "../components/ProductItem";
import './Menu.css'
import '../components/ProductItem.css'
import { useQuery } from "@tanstack/react-query";
import { fetchMeals } from "../components/util/http";

function Menu() {
  const {data, isPending, isError} = useQuery ({
    queryKey: ['products'],
    queryFn: fetchMeals
  })
  return (
    <div>
      <ul className="meals-container">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ul>
    </div>
  );
}

export default Menu;
