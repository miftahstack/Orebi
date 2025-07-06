// Own Components
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
// Own Components

// Images
import Logo from "../../assets/logo.svg"
// Images

// React Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Img from "../Img";
// React Icons

const Footer = () => {
  return (
    <>
      <section>
        <div className="bg-bgColor pb-12">
          <Container>
            <div className={"flex justify-between py-13.5"}>
              <div className="flex justify-between w-[35%]">
                <div className="">
                  <Heading
                    txt={`Menu`}
                    as={"h4"}
                    className="mb-4 uppercase font-semibold"
                  />
                  <ul className="gap-x-4 font-[400] ">
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Shop
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        About
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Contacts
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Jounal
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <Heading
                    txt={`Shop`}
                    as={"h4"}
                    className="mb-4 uppercase font-semibold"
                  />
                  <ul className="gap-x-4 font-[400] ">
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Category 1
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Category 2
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Category 3
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Category 4
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Category 5
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <Heading
                    txt={`Help`}
                    as={"h4"}
                    className="mb-4 uppercase font-semibold"
                  />
                  <ul className="gap-x-4 font-[400] ">
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Special E-shop
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Shipping
                      </a>
                    </li>
                    <li className={"mb-1"}>
                      <a
                        className="hover:text-blackColor  text-[#767676]"
                        href="#"
                      >
                        Secure Payments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-around w-[70%]">
                <div className="">
                  <Heading
                    txt={`(052) 611-5711`}
                    as={"h4"}
                    className="uppercase font-semibold "
                  />
                  <Heading
                    txt={`company@domain.com`}
                    as={"h4"}
                    className="mb-4 uppercase font-semibold "
                  />
                  <Heading
                    txt={`575 Crescent Ave. Quakertown, PA 18951`}
                    as={"p"}
                    className="text-textColor"
                  />
                </div>
                <div className="w-[20%]">
                 <Img src={Logo} />
                  
                </div>
              </div>
            </div>
            <Flex className={'justify-between'}>
              <div className="flex justify-between gap-x-3">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
              <div className="">
                <Heading className="text-textColor text-sm" txt={'2020 Orebi Minimal eCommerce Figma Template by Adveits'} as={'h3'} />
              </div>
            </Flex>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Footer;
