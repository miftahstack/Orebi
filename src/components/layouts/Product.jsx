import React from "react";
import Img from "../Img";
import CLock from "../../assets/clockOne.png";

const Product = (props) => {
  return (
    <div className="w-[305px] relative">
      <Img src={props.imgsrc} alt={props.imgalt} />
      <span className="badge absolute bg-black text-white top-5 left-5 font-bold px-6 py-3.5 rounded-none">
        {props.badgetxt}
      </span>
      <div className="flex justify-between pt-5">
        <p className="font-bold text-texProductColor">Basic Crew Neck Tee</p>
        <p className="text-textColor font-xl">$44.00</p>
      </div>
    </div>
  );
};

export default Product;
