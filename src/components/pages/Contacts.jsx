// Own Components
import { Link } from "react-router-dom";
import Container from "../Container";
import Heading from "../Heading";
// Own Components

// React Icon
import { PiGreaterThan } from "react-icons/pi";
import Button from "../layouts/Button";
// React Icon

const Contacts = () => {
  return (
    <>
      <section>
        <Container>
          <div className="py-20">
            <Heading
              className={`text-5xl font-bold text-texProductColor `}
              txt={"Contacts"}
              as={"h3"}
            />
            <div className="flex items-center gap-x-1 mt-2">
              <Link to={"/"}>
                <Heading className={` text-textColor `} txt={"Home"} as={"p"} />
              </Link>
              <span className="text-[12px]  text-textColor mt-1">
                <PiGreaterThan />
              </span>
              <Heading className={` text-textColor cursor-pointer`} txt={"Contacts"} as={"p"} />
            </div>
          </div>
          <div className="flex flex-col w-[500px]">
            <Heading txt={"Fill up a Form"} as={"h3"} />

            <label className="pt-5 pb-2 " htmlFor="">
              Name
            </label>
            <input
              className="pb-3 border-b text-[14px] border-gray-200 focus:outline-0"
              type="text"
              placeholder="Your name here"
            />

            <label className="pt-5 pb-2 " htmlFor="">
              Email
            </label>
            <input
              className="pb-3 border-b text-[14px] border-gray-200 focus:outline-0"
              type="text"
              placeholder="Your email here"
            />

            <label className="pt-5 pb-2 " htmlFor="">
              Name
            </label>
            <textarea
              className="mb-10 pb-10 border-b border-gray-200 focus:outline-0 resize-none"
              type="text"
              placeholder="Your name here"
            />
          </div>
          <Button className={`mb-20`} type="button" txt={"Post"} />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1585016980716!2d90.37991002483221!3d23.74172658911027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1752399143488!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={ {border: 0} }
          />
        </Container>
      </section>
    </>
  );
};

export default Contacts;
