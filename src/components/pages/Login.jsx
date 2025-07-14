// Own Components
import { Link } from "react-router-dom";
import Container from "../Container";
import Heading from "../Heading";
// Own Components

// React Icon
import { PiGreaterThan } from "react-icons/pi";
import Button from "../layouts/Button";
// React Icon

const Login = () => {
  return (
    <>
      <section>
        <Container>
          <div className="py-20">
            <Heading
              className={`text-5xl font-bold text-texProductColor `}
              txt={"Login"}
              as={"h3"}
            />
            <div className="flex items-center gap-x-1 mt-2">
              <Link to={"/"}>
                <Heading className={` text-textColor `} txt={"Home"} as={"p"} />
              </Link>
              <span className="text-[12px]  text-textColor mt-1">
                <PiGreaterThan />
              </span>
              <Heading className={` text-textColor cursor-pointer`} txt={"Login"} as={"p"} />
            </div>
            <Heading
              className={`text-textColor py-23 pr-[700px]`}
              txt={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
              }
              as={"p"}
            />
            <hr className="border-hrColor pb-10" />

            <Heading
              className={`text-[48px] font-bold pb-10`}
              txt={"Returning Customer"}
              as={"h3"}
            />
            <div className="flex gap-x-20">
              <div className="flex flex-col">
                <label htmlFor="email">Email address</label>
                <input
                  className="py-1 focus:outline-0"
                  name="email"
                  type="text"
                  placeholder="company@domain.com"
                />
                <hr className="border-hrColor" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="pass">Password</label>
                <input
                  className="py-1 focus:outline-0"
                  name="pass"
                  type="text"
                  placeholder="•••••••"
                />
                <hr className="border-hrColor" />
              </div>
            </div>
            <Button className={`my-10`} txt={"Log in"} />
            <hr className="border-hrColor mt-10" />
          </div>
          <Heading className={`text-[48px] font-bold pb-10`} txt={"New Customer"} as={"h3"} />
          <Heading
            className={`text-textColor pr-[700px]`}
            txt={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            }
            as={"p"}
          />
          <Button className={`my-10 mb-30`} txt={"Continue"} />
        </Container>
      </section>
    </>
  );
};

export default Login;
