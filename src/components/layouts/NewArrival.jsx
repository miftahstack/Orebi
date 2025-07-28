// Own Components
import Container from "../Container";
import Flex from "../Flex";
import Product from "./Product";
import { Link } from "react-router-dom";
// Own Components

// Images
import Clock from "../../assets/clockOne.png";
import Watch from "../../assets/watch.png";
import Basket from "../../assets/basket.png";
import Stuff from "../../assets/stuff.png";
import Bottle from "../../assets/bottle.png";
import Bag from "../../assets/bag.png";
import BagTwo from "../../assets/bagTwo.png";
import HamalDista from "../../assets/hamal-dista.png";
import Slider from "react-slick";
// Images

const NewArrival = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <section>
        <Container className={"pb-20"}>


          <h3 className="font-bold text-[38px] pb-12">New Arrivals</h3>


          <Slider {...settings}>
            <Link to={"/shop"}>
              <Product imgsrc={Clock} imgalt={"clock.png"} badgetxt={"10%"} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={Watch} imgalt={"watch.png"} badgetxt={"New"} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={Basket} imgalt={"basket.png"} badgetxt={"New"} />
            </Link>
            <Link to={"/shop"}>
              <Product imgsrc={Stuff} imgalt={"stuff.png"} badgetxt={"New"} />
            </Link>

            <Link to={"/shop"}>
              <Product imgsrc={Clock} imgalt={"clock.png"} badgetxt={"10%"} />
            </Link>
          </Slider>

          <h3 className="font-bold pt-20 pb-12 text-[38px]">Our Bestsellers</h3>
          <Slider className="flex" {...settings}>
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
            <Link to={"/shop"}>
              <Product imgsrc={Bottle} imgalt={"clock.png"} badgetxt={"New"} />
            </Link>
          </Slider>
        </Container>
      </section>
    </>
  );
};
export default NewArrival;
