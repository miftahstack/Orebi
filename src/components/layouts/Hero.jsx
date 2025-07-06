// Own Components
import Flex from "../Flex";
import Container from "../Container";
import Img from "../Img";
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
      <section>
         <Link to={"/shop"}>
            <Img src={hero} alt={"hero.png"} />
         </Link>
      </section>
    </>
  );
};

export default Hero;
