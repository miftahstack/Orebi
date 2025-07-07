import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";

const Category = (props) => {
  return (
    <Container>
      <Flex className={`justify-between w-[370px] py-3`}>
        <Heading className={props.className} txt={props.txt} as={props.as} />
        <p className="text-textColor">+</p>
      </Flex>
      <hr className="border-bgColor w-[370px]" />
    </Container>
  );
};

export default Category;
