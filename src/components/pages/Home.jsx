import Ads from "../layouts/Ads";
import Hero from "../layouts/Hero";
import Info from "../layouts/Info";
import NewArrival from "../layouts/NewArrival";
import SpecialOffers from "../layouts/SpecialOffers";

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Ads />
      <NewArrival />
      <SpecialOffers />
    </>
  );
};

export default Home;
