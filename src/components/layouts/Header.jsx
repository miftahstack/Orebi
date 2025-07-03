import Container from "../Container";
import Flex from "../Flex";
import Img from "../Img";
import logo from "../../assets/logo.svg";
import bars from "../../assets/bars.svg";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <section>
        <Container className={"mt-5"}>
          <Flex className={"justify-between"}>
            <Img src={logo} alt={"logo"} />
            <ul className="flex gap-x-4">
              <li>
                <a
                  className="hover:text-[#262626] font-[500] text-[#767676]"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#262626] font-[500] text-[#767676]"
                  href="#"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#262626] font-[500] text-[#767676]"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#262626] font-[500] text-[#767676]"
                  href="#"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#262626] font-[500] text-[#767676]"
                  href="#"
                >
                  Jounal
                </a>
              </li>
            </ul>
            <div className=""></div>
          </Flex>
        </Container>
        <Container >
          <Flex className={"justify-between"}>
            <div className="">
              <Img src={bars} alt={"bars"} />
            </div>
            <div className="">12</div>
            <div className="">12</div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Header;
