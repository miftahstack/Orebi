// Own Components
import { Link } from "react-router-dom";
import Container from "../Container";
import Heading from "../Heading";
// Own Components

// React Icon
import { PiGreaterThan } from "react-icons/pi";
import Button from "../layouts/Button";
// React Icon

const SignUp = () => {
  return (
    <>
      <section>
        <Container>
          <div className="py-20">
            <Heading
              className={`text-5xl font-bold text-texProductColor `}
              txt={"Sign up"}
              as={"h3"}
            />
            <div className="flex items-center gap-x-1 mt-2">
              <Link to={"/"}>
                <Heading className={` text-textColor `} txt={"Home"} as={"p"} />
              </Link>
              <span className="text-[12px]  text-textColor mt-1">
                <PiGreaterThan />
              </span>
              <Heading className={` text-textColor cursor-pointer`} txt={"Sign up"} as={"p"} />
            </div>
            <Heading
              className={`text-textColor py-23 pr-[700px]`}
              txt={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
              }
              as={"p"}
            />
            <hr className="border-hrColor pb-10" />
          </div>
          <Heading className={`text-[48px] font-bold pb-10`} txt={"Returning Customer"} as={"h3"} />
          <div className="flex gap-x-10 flex-wrap mb-3">
            <div className="flex flex-col">
              <label htmlFor="First Name">First Name</label>
              <input
                className="py-1 focus:outline-0"
                name="First Name"
                type="text"
                placeholder="First Name"
              />
              <hr className="border-hrColor w-[500px]" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Last name">Last Name</label>
              <input
                className="py-1 focus:outline-0"
                name="Last name"
                type="text"
                placeholder="Last Name"
              />
              <hr className="border-hrColor w-[500px]" />
            </div>
          </div>
          <div className="flex gap-x-10 flex-wrap ">
            <div className="flex flex-col ">
              <label htmlFor="email">Email address</label>
              <input
                className="py-1 focus:outline-0"
                name="email"
                type="text"
                placeholder="company@domain.com"
              />
              <hr className="border-hrColor w-[500px]" />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="Telephone">Telephone</label>
              <input
                className="py-1 focus:outline-0"
                name="Telephone"
                type="text"
                placeholder="Your phone number"
              />
              <hr className="border-hrColor w-[500px]" />
            </div>
          </div>
          <hr className="border-hrColor my-20" />
          <Heading className={`text-[48px] font-bold pb-10`} txt={"New Customer"} as={"h3"} />
          <div className="flex gap-x-10 flex-wrap ">
            <div className="flex flex-col">
              <label htmlFor="First Name">Address 1</label>
              <input
                className="py-1 focus:outline-0"
                name="First Name"
                type="text"
                placeholder="4279 Zboncak Port Suite 6212"
              />
              <hr className="border-hrColor w-[500px]" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Last name">Address 2</label>
              <input
                className="py-1 focus:outline-0"
                name="Last name"
                type="text"
                placeholder="-"
              />
              <hr className="border-hrColor w-[500px]" />
            </div>
          </div>
          <div className="flex gap-x-10 flex-wrap my-3">
            <div className="flex flex-col ">
              <label htmlFor="email">City</label>
              <input
                className="py-1 focus:outline-0"
                name="email"
                type="text"
                placeholder="Your city"
              />
              <hr className="border-hrColor w-[500px]" />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="Telephone">Post code</label>
              <input
                className="py-1 focus:outline-0"
                name="Telephone"
                type="text"
                placeholder="05228"
              />
              <hr className="border-hrColor w-[500px]" />
            </div>
          </div>
          <div className="flex gap-x-10 flex-wrap ">
            <div className="flex flex-col ">
              <label className="pb-1" htmlFor="divion">
                Division
              </label>
              <select className="text-textColor pb-1" required name="division" id="divion">
                <option disabled selected hidden>
                  Select Division
                </option>
                <option value="">Division 01</option>
                <option value="">Division 02</option>
                <option value="">Division 03</option>
                <option value="">Division 04</option>
                <option value="">Division 05</option>
              </select>
              <hr className="border-hrColor w-[500px]" />
            </div>
            <div className="flex flex-col ">
              <label className="pb-1" htmlFor="district">
                District
              </label>
              <select className="text-textColor pb-1" required name="district" id="divion">
                <option disabled selected hidden>
                  Select District
                </option>
                <option value="">Division 01</option>
                <option value="">Division 02</option>
                <option value="">Division 03</option>
                <option value="">Division 04</option>
                <option value="">Division 05</option>
              </select>
              <hr className="border-hrColor w-[500px]" />
            </div>
          </div>
          <hr className="border-hrColor my-20" />

          <Heading className={`text-[48px] font-bold pb-10`} txt={"Your Password"} as={"h3"} />
          <div className="flex gap-x-10">
            <div className="flex flex-col">
              <label htmlFor="First Name">Password</label>
              <input
                className="py-1 pb-2 focus:outline-0"
                name="First Name"
                type="text"
                placeholder="Password"
              />
              <hr className="border-hrColor w-[500px]" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="First Name">Repeat Password</label>
              <input
                className="py-1 pb-2 focus:outline-0"
                name="First Name"
                type="text"
                placeholder="Repeat password"
              />
              <hr className="border-hrColor w-[500px]" />
            </div>
          </div>
          <hr className="border-hrColor my-15" />

          <div className="text-textColor">
            <div className="flex">
              <input className="mr-3" type="checkbox" />
              <Heading txt={"I have read and agree to the Privacy policy"} as={"p"} />
            </div>
            <div className="flex mt-3 gap-x-4">
              <Heading txt={"Subscribe Newsletter"} as={"p"} />
              <input id="yes" className="radio" type="radio" />
              <label htmlFor="yes">Yes</label>
              <input id="no" className="radio" type="radio" />
              <label htmlFor="no">No</label>
            </div>
            <Button className={`my-20`} txt={"Log in"}/>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SignUp;
