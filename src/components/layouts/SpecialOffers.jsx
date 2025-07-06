// Own Components
import Container from "../Container";
import Flex from "../Flex";
import Product from "./Product";
import { Link } from "react-router-dom";
// Own Components

// Images
import Bottle from "../../assets/bottle.png";
import Bag from "../../assets/bag.png";
import BagTwo from "../../assets/bagTwo.png";
import HamalDista from "../../assets/hamal-dista.png";
// Images

// Own Components
const SpecialOffers = () => {
  return (
    <>
      <section>
        <Container className={""}>
          <h3 className="font-bold text-[38px] ">Special Offers</h3>
          <Flex className={"pt-20 gap-3 justify-between flex-wrap"}>
            <Link to={"/shop"}>
              <Product imgsrc={Bottle} imgalt={"clock.png"} badgetxt={"New"} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={Bag} imgalt={"watch.png"} badgetxt={"New"} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={HamalDista} imgalt={"stuff.png"} badgetxt={"New"} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={BagTwo} imgalt={"basket.png"} badgetxt={"New"} />{" "}
            </Link>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default SpecialOffers;
