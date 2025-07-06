// Own Components
import Container from "../Container";
import Flex from "../Flex";
import Product from "./Product";
import { Link } from "react-router-dom";
// Own Components

// Images
import Cap from "../../assets/cap.png";
import Table from "../../assets/table.png";
import Headphone from "../../assets/headphone.png";
import Sunglass from "../../assets/sungalss.png";
// Images

// Own Components
const SpecialOffers = () => {
  return (
    <>
      <section>
        <Container className={"py-20"}>
          <h3 className="font-bold text-[38px] ">Special Offers</h3>
          <Flex className={"pt-20 gap-3 justify-between flex-wrap"}>
            <Link to={"/shop"}>
              <Product imgsrc={Cap} imgalt={"clock.png"} badgetxt={"New"} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={Table} imgalt={"watch.png"} badgetxt={"New"} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={Headphone} imgalt={"stuff.png"} badgetxt={"New"} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={Sunglass} imgalt={"basket.png"} badgetxt={"New"} />{" "}
            </Link>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default SpecialOffers;
