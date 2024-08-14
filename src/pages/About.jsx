import "./About.css";
import { useNavigate } from "react-router";
import whoweare from "/src/images/whoweare.jpg";
import oldresto from "/src/images/oldresto.jpg";
import azerbaijan from "/src/images/azerbaijan.png";
import europemap from "/src/images/europemap.jpg";

function About() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/contact");
  }

  return (
    <div className="about-container">
      <h1>About us</h1>
      <div className="about-container-first">
        <p>
          <h1>Who are we</h1> MasalFood is one of the biggest restaurant chains
          that still exists in Azerbaijan.{" "}
        </p>
        <img src={whoweare} width={586} height={360} />
      </div>
      <div className="about-container-second">
        <p>
          <h1>History</h1> First ever MasalFood restaurant was opened in
          Masallı, Azerbaijan, which takes its name from the city it belongs to
          and today it serves the people of the Masallı as one of the best and
          oldest restaurants in the city.
        </p>
        <img src={oldresto} width={586} height={360} />
      </div>
      <div className="about-container-first">
        <p>
          <h1>Restaurants</h1> Including all the restaurants, MasalFood today
          has 18 filials across the country in the most populated cities like
          Masallı, Lankaran, Baku, Sumqayit, Ganja and Nakchivan.
        </p>
        <img src={azerbaijan} width={586} height={360} />
      </div>
      <div className="about-container-second">
        <p>
          <h1>Future plans</h1> Main purpose of the MasalFood is opening the way
          of reaching the global market in following years. At the moment we are
          aiming to start the construction of our future and first global filial
          in Munich, Germany.
        </p>
        <img src={europemap} width={586} height={360} />
      </div>
      <h3>For more information</h3>
      <button onClick={handleClick} className="about-button">
        Contact us
      </button>
    </div>
  );
}

export default About;
