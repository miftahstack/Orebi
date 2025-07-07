// Own Components
import { Link } from "react-router-dom";
// Own Components

import ReactSlider from "./Slider";


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
