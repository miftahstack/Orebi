// Own Components
import Container from "../Container";
import Flex from "../Flex";
import Product from "./Products";
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
          <Flex className={"pt-20 gap-x-3 justify-between flex-wrap"}>
            <Link to={"/shop"}>
              <Product imgsrc={Cap} imgalt={"clock.png"} badgetxt={"New"} title={"Basic Crew Neck Tee"} price={`$44.00`} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={Table} imgalt={"Table.png"} badgetxt={"New"} title={"Basic Crew Neck Tee"} price={`$44.00`} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={Headphone} imgalt={"Headphone.png"} badgetxt={"New"} title={"Basic Crew Neck Tee"} price={`$44.00`} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={Sunglass} imgalt={"Sunglass.png"} badgetxt={"New"} title={"Basic Crew Neck Tee"} price={`$44.00`} />
            </Link>

          </Flex>
        </Container>
      </section>
    </>
  );
};

export default SpecialOffers;
