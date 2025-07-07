// Own Components
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
// Own Components

// React Icon
import { PiGreaterThan } from "react-icons/pi";
import Category from "../layouts/Category";
// React Icon

const Shop = () => {
  return (
    <>
      <Container>
        <div className="py-20">
          <Heading
            className={`text-5xl font-bold text-texProductColor `}
            txt={"Product"}
            as={"h3"}
          />
          <div className="flex items-center gap-x-1 mt-2">
            <Link to={"/"}>
              <Heading className={` text-textColor `} txt={"Home"} as={"p"} />
            </Link>
            <span className="text-[12px]  text-textColor mt-1">
              <PiGreaterThan />
            </span>
            <Heading className={` text-textColor cursor-pointer`} txt={"Products"} as={"p"} />
          </div>
        </div>
      </Container>
    <Container>
        <Heading
        className={`text-[20px] font-bold text-texProductColor mb-3`}
        txt={"Shop by category"}
        as={"h2"}
      />
      <Category className={`text-[15px] text-textColor`} txt={"Category 1"} as={"h4"} />
      <Category className={`text-[15px] text-textColor`} txt={"Category 2"} as={"h4"} />
      <Category className={`text-[15px] text-textColor`} txt={"Category 3"} as={"h4"} />
      <Category className={`text-[15px] text-textColor`} txt={"Category 4"} as={"h4"} />
      <Category className={`text-[15px] text-textColor`} txt={"Category 5"} as={"h4"} />
    </Container>
    </>
  );
};

export default Shop;
