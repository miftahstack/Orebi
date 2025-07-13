import React from "react";
import Container from "../Container";
import Heading from "../Heading";

// React Icons
import { FaSearch } from "react-icons/fa";
import Button from "../layouts/Button";
// React Icons

const Error = () => {
  return (
    <>
      <section>
        <Container>
          <Heading className={`font-bold text-[56px]`} txt={`404`} as={"h3"} />
          <Heading
            className={`text-textColor w-[640px]`}
            txt={`The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?`}
            as={"p"}
          />
          <div className="relative">
            <input className="" type="text" placeholder="Type to search" />
            <FaSearch className="absolute top-0 right-0 -translate-1/2" />
          </div>

          <Button className={"text-red-500"} txt={"Hii, I am button"} />
        </Container>
      </section>
    </>
  );
};

export default Error;
