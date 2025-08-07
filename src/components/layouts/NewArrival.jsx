// Own Components
import Container from "../Container";
import Flex from "../Flex";
import Product from "./Products";
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
import { useEffect, useState } from "react";
import axios from "axios";
// Images

const NewArrival = () => {
  //SLider
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    pauseOnHover: true,
    speed: 700,
    autoplaySpeed: 2500,

  };

  //SLider

  const [myProducts, setMyProducts] = useState([])
  const [myProductsList, setMyProductsList] = useState([])

  useEffect(() => {
    async function x() {
      let data = await axios.get('https://dummyjson.com/products?skip=30')
      setMyProducts(data.data.products)
    }
    x()
  },[])

  useEffect(() => {
    async function y() {
      let data = await axios.get('https://dummyjson.com/products?limit=20&skip=20')
      setMyProductsList(data.data.products)
    }
    y()
  },[])

  return (
    <>
      <section>
        <Container className={"pb-20"}>
          <h3 className="font-bold text-[38px] pb-12">New Arrivals</h3>
          <Slider  {...settings}>
            {myProducts.map(items => (
              <Link key={items.id} to={"/shop"} >
                <Product
                  imgsrc={items.images}
                  imgalt={items.name}
                  badgetxt={`${items.discountPercentage}%`}
                  title={items.title}
                  price={`$ ${items.price}`}
                />
              </Link>
            ))}
          </Slider>

          <h3 className="font-bold pt-20 pb-12 text-[38px]">Our Bestsellers</h3>
          <Slider  {...settings}>
            {myProductsList.map(items => (
              <Link key={items.id} to={"/shop"} >
                <Product
                  imgsrc={items.thumbnail}
                  imgalt={items.name}
                  badgetxt={`${items.discountPercentage}%`}
                  title={items.title}
                  price={`$ ${items.price}`}
                />
              </Link>
            ))}
          </Slider>

        </Container>
      </section >
    </>
  );
};
export default NewArrival;
