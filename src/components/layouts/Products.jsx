// Own Components
import Img from "../Img";
// Own Components
// React Icons
import { FaHeart, FaUndo } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
// React Icons
//Redux
import { useDispatch } from "react-redux";
import {addtocart} from "/src/features/cart/addtocartSlice.js";

const Products = ({ id, title, price, imgsrc, badgetxt, imgalt }) => {
  let dispatch = useDispatch()
  let handleAddtocart = () => {
    dispatch(
      addtocart({
        id: id,
        title: title,
        price: price,
        img: imgsrc,
        badgetxt: badgetxt,
        alt: imgalt,
        quantity: 1,
      })
    );
    alert("Product Added to Cart")
  };

  return (
    <div className={`w-[305px] relative group duration-300 hover:scale-101`}>
      <Img className={`bg-gray-50 h-[305px]`} src={imgsrc} alt={imgalt} />
      <span className="badge absolute bg-black text-white top-5 left-5 font-bold px-6 py-3.5 rounded-none">
        {badgetxt}
      </span>
      <div className="flex justify-between pt-5">
        <p className="font-bold text-texProductColor">{title}</p>
        <p className="text-textColor font-xl">{price}</p>
      </div>
      <div className="bg-white flex text-textColor p-5 gap-y-1 duration-300 flex-col items-end absolute bottom-10 w-full opacity-0 group-hover:opacity-100 transition-all ease-in-out " >
        <p className="flex items-center text-[14px] hover:text-black font-light">Add to Wish List <span className="text-black text-[14px] pl-2"><FaHeart /></span> </p>
        <p className="flex items-center text-[14px] hover:text-black font-light">Compare <span className="text-black text-[14px] pl-2"><FaUndo /></span> </p>
        <p onClick={handleAddtocart} className="flex items-center text-[14px] hover:text-black font-light">Add to Cart<span className="text-black text-[14px] pl-2"><FaShoppingCart /></span> </p>
      </div>
    </div>
  );
};

export default Products;