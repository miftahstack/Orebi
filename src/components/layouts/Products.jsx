// Own Components
import Img from "../Img";
// Own Components

// React Icons
import { FaHeart, FaUndo } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
// React Icons

const Products = (props ) => {
  return (
    <div className={`w-[305px] relative group duration-300 hover:scale-101`}>
      <Img src={props.imgsrc} alt={props.imgalt} />
      <span className="badge absolute bg-black text-white top-5 left-5 font-bold px-6 py-3.5 rounded-none">
        {props.badgetxt}
      </span>
      <div className="flex justify-between pt-5">
        <p className="font-bold text-texProductColor">{props.title}</p>
        <p className="text-textColor font-xl">{props.price}</p>
      </div>
      <div className="bg-white flex text-textColor p-5 gap-y-1 duration-300 flex-col items-end absolute bottom-10 w-full opacity-0 group-hover:opacity-100 transition-all ease-in-out  " >
        <p className="flex items-center text-[14px]  hover:text-black font-light">Add to Wish List <span className="text-black text-[14px] pl-2"><FaHeart /></span> </p>
        <p className="flex items-center text-[14px] hover:text-black font-light">Compare <span className="text-black text-[14px] pl-2"><FaUndo /></span> </p>
        <p className="flex items-center text-[14px] hover:text-black font-light">Add to Cart<span className="text-black text-[14px] pl-2"><FaShoppingCart /></span> </p>
      </div>
    </div>
  );
};

export default Products;
