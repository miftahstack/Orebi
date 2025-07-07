import { Link } from "react-router-dom";
import Slider from "react-slick";
import Img from "../Img";
import slideOne from "../../assets/slide-one.png";
import slideTwo from "../../assets/slide-two.png";
import slideThree from "../../assets/slide-three.png";


function ReactSlider() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
     
          <div>
            <Img src={slideOne} alt={"hero.png"} />
          </div>
          <div>
            <Img src={slideTwo} alt={"hero.png"} />
          </div>
          <div>
            <Img src={slideThree} alt={"hero.png"} />
          </div>

      </Slider>
    </div>
  );
}

export default ReactSlider;
