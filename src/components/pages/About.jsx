// Own Components
import { Link } from "react-router-dom";
import Container from "../Container";
import Heading from "../Heading";
// Own Components

// Images
import Clock from "../../assets/about-one.png";
import Basket from "../../assets/about-two.png";
// Images

// React Icon
import { PiGreaterThan } from "react-icons/pi";
import Flex from "../Flex";
import Img from "../Img";
// React Icon

const About = () => {
  return (
    <>
      <Container>
        <div className="py-20">
          <Heading className={`text-5xl font-bold text-texProductColor `} txt={"About"} as={"h3"} />
          <div className="flex items-center gap-x-1 mt-2">
            <Link to={"/"}>
              <Heading className={` text-textColor `} txt={"Home"} as={"p"} />
            </Link>
            <span className="text-[12px]  text-textColor mt-1">
              <PiGreaterThan />
            </span>
            <Heading className={` text-textColor cursor-pointer`} txt={"About"} as={"p"} />
          </div>
        </div>
        <Link to={"/shop"}>
          <Flex className={`gap-7`}>
            <div className="">
              <Img src={Clock} alt={"clock.png"} />
            </div>
            <div className="">
              <Img src={Basket} alt={"basket.png"} />
            </div>
          </Flex>
          <Heading
            className={`text-[30px] py-25 text-texProductColor`}
            txt={
              "Orebi is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
            }
            as={"p"}
          />
        </Link>
        <Flex className={`pb-25 gap-x-5`}>
         <div className="">
            <Heading className={"text-[30px] font-bold pb-2"} txt={"Our Vision"} as={"h4"}/>
            <Heading className={"text-textColor text-[15px]"} txt={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."} as={"p"}/>
         </div>
         <div className="">
            <Heading className={"text-[30px] font-bold pb-2"} txt={"Our Story"} as={"h4"}/>
            <Heading className={"text-textColor text-[15px] pr-12"} txt={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."} as={"p"}/>
         </div>
         <div className="">
            <Heading className={"text-[30px] font-bold pb-2"} txt={"Our Brands"} as={"h4"}/>
            <Heading className={"text-textColor text-[15px]"} txt={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."} as={"p"}/>
         </div>
        </Flex>
      </Container>
    </>
  );
};

export default About;
