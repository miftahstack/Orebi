// Own Components
import Container from "../Container";
import Img from "../Img";
// Own Components

// Images
import POY from "../../assets/adsTwo.jpg";
import { Link } from "react-router-dom";
// Images
const AdsTwo = () => {
  return (
    <>
      <section >
        <Container className={
         "py-20"
        }>
          <Link to={"/shop"}>
            <div>
              <Img src={POY} alt={"phone-of-the-year.png"} />
            </div>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default AdsTwo;
