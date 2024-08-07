import { useNavigate } from "react-router";
import FeaturedProducts from "../components/FeaturedProducts";
import "./Home.css";
//import Header from './Header'

function Home() {
  const navigate = useNavigate()
  
  function handleClick() {
    navigate('/menu')
  }
  return (
    <>
      <div className="home-container" style={{ position: "relative" }}>
        <p className="img-text">
          Taste The <br /> Quality
        </p>
        <p className="subtitle">Discover the products!</p>
        <button onClick={handleClick} className="home-button">See Products</button>
      </div>
      <FeaturedProducts />
    </>
  );
}

export default Home;
