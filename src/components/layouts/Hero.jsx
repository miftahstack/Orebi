// Own Components
import Img from "../Img";

import { Link } from "react-router-dom";
// Own Components

// Images
import hero from "../../assets/ hero.png";
import ReactSlider from "./Slider";
// Images

const Hero = () => {
  return (
    <>
      <section className="bg-bgColor m-auto">
        <Link to={"/shop"}>
        <ReactSlider />
        </Link>
      </section>
    </>
  );
};

export default Hero;
