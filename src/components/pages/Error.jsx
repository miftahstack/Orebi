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
          <Heading className={`font-bold text-[200px]`} txt={`404`} as={"h3"} />
          <Heading
            className={`text-textColor w-[640px]`}
            txt={`The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?`}
            as={"p"}
          />
          <div className="w-[650px] relative py-10">
            <input className="w-[650px] py-5 px-5 border-gray-200 border" type="text" placeholder="Type to search" />
            <FaSearch className="absolute top-1/2 right-5 -translate-y-1/2" />
          </div>

          <Button className={`bg-black text-white px-10 py-3 mb-[130px]`} txt={"Back to Home"} />
        </Container>
      </section>
    </>
  );
};

export default Error;
