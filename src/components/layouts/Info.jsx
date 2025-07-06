// Own Components
import Flex from "../Flex";
import Container from "../Container";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck, FaUndo } from "react-icons/fa";

// Own Components

// React Icon

// React Icon

const Info = () => {
  return (
    <>
      <section>
        <Container>
          <Flex className={"justify-between py-6"}>
            <p className="flex items-center">
              <span className="text-2xl mr-1">
                <PiNumberTwoBold />
              </span>
              Two years warranty
            </p>
            <p className="flex items-center">
              <span className="text-2xl mr-2">
                <FaTruck />
              </span>
              Two years warranty
            </p>
            <p className="flex items-center">
              <span className="text-xl mr-2">
                <FaUndo />
              </span>
              Free Shipping
            </p>
          </Flex>
        </Container>
        <hr className="border-[#F0F0F0]" />
      </section>
    </>
  );
};

export default Info;
