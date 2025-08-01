// Own Components
import Container from "../Container";
import Flex from "../Flex";
import Img from "../Img";
import Heading from "../Heading";
// Own Components

// Images
import logo from "../../assets/logo.svg";
import bars from "../../assets/bars.svg";
// Images

// React Icon
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
// React Icon
const Header = () => {
  return (
    <>
      <section>
        <Container className={"p-6"}>
          <Flex className={"justify-between"}>
            <Link to="/">
            <Img src={logo} alt={"logo"} />
            </Link>
            <ul className="flex gap-x-4">
              <Link to="/">
                <li>
                  <a className="hover:text-blackColor font-[500] text-[#767676]" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/shop">
                <li>
                  <a className="hover:text-blackColor font-[500] text-[#767676]" href="#">
                    Shop
                  </a>
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <a className="hover:text-blackColor font-[500] text-[#767676]" href="#">
                    About
                  </a>
                </li>
              </Link>
              <Link to="/contacts">
                <li>
                  <a className="hover:text-blackColor font-[500] text-[#767676]" href="#">
                    Contacts
                  </a>
                </li>
              </Link>
              <Link to="*">
                <li>
                  <a className="hover:text-blackColor font-[500] text-[#767676]" href="#">
                    Journal
                  </a>
                </li>
              </Link>
            </ul>
            <div className=""></div>
          </Flex>
        </Container>
        <div className="bg-bgColor py-5">
          <Container>
            <Flex className={"justify-between"}>
              <div className="flex gap-x-2">
                <Img src={bars} alt={"bars"} />
                <Heading txt={`Shop By Category`} as={"h4"} className="text-sm" />
              </div>
              <div className="flex relative">
                <input
                  type="search"
                  className=" bg-white p-4 w-[600px] focus:outline-0"
                  placeholder="Search Products"
                />
                <FaSearch className="right-5 top-1/2 -translate-y-1/2 absolute" />
              </div>
              <div className="flex gap-x-4">
                <div className="flex">
                  <FaUserAlt />
                  <MdOutlineArrowDropDown />
                </div>
                <FaCartShopping />
              </div>
            </Flex>
          </Container>
        </div>
      </section>
    </>
  );
};
export default Header;
