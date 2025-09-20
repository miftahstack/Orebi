import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Img from "../Img";
import Shandle from "../../assets/shandle.png";
import Clock from "../../assets/clock.png";
import TableLamp from "../../assets/table-lamp.png";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <>
      <section>
        <Container>
          <Flex className={"gap-x-8 py-40"}>
            <Link to={"/shop"}>
              <div className="">
                <Img src={Shandle} alt={"Ads Banner"} />
              </div>
            </Link>
            <Link to={"/shop"}>
              <div className={"flex flex-col gap-y-7.5"}>
                <Img src={Clock} alt={"Ads Banner"} />
                <Img src={TableLamp} alt={"Ads Banner"} />
              </div>
              </Link>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Ads;
