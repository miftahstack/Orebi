// Own Components
import Container from "../Container";
import Img from "../Img";
import { PiNumberTwoBold } from "react-icons/pi";
// Own Components

// Images
import hero from "../../assets/ hero.png";
import { Link } from "react-router-dom";
// Images

// React Icon

// React Icon

const Hero = () => {
  return (
    <>
      <section className="bg-bgColor m-auto">
        
          <Link to={"/shop"}>
            <div >
              <Img src={hero} alt={"hero.png"} />
            </div>
          </Link>

      </section>
    </>
  );
};

export default Hero;
