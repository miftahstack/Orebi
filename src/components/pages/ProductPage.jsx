// Own Components
import Container from "../Container"
import Flex from "../Flex"
import Img from "../Img"
import Heading from "../Heading"
// Own Components

// Img
import Basket from "../../assets/Image_1.png"
import Sunglass from "../../assets/Image_2.png"
import Headphone from "../../assets/Image_3.png"
import Table from "../../assets/Image_4.png"
// Img



//  Icons
import { Star, StarHalf } from 'lucide-react';
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react"
//  Icons

const ProductPage = () => {

   //Use State for Product quantity
   const [count, setCount] = useState(0)
   const handleInc = () => {
      setCount(count + 1)
   }
   const handleDec = () => {
      if (count > 0) {
         setCount(count - 1)
      }
   }
   //_________________________________



   return (
      <>
         <section>
            <Container>
               <Flex className={`flex-wrap justify-center gap-7.5 `}>
                  <Img className={`w-150`} src={Basket} alt={"basket.png"} />
                  <Img className={`w-150`} src={Sunglass} alt={"basket.png"} />
                  <Img className={`w-150`} src={Headphone} alt={"basket.png"} />
                  <Img className={`w-150`} src={Table} alt={"basket.png"} />
               </Flex>
               <Heading className={`text-[38px]`} txt={`Product`} as={"h3"} />
               <div className="flex">
                  <div className="flex text-2xl">
                     <Star color="none" fill="#FFD881" size={20} />
                     <Star color="none" fill="#FFD881" size={20} />
                     <Star color="none" fill="#FFD881" size={20} />
                     <Star color="none" fill="#FFD881" size={20} />
                     <StarHalf color="none" fill="#FFD881" size={20} />
                  </div>
                  <p className="ml-5">1 Review</p>
               </div>
               <div className="flex gap-x-16 pb-7.5">
                  <p className="line-through text-textColor">$88.00</p>
                  <p className="font-semibold text-[18px]">$44.00</p>
               </div>
               <hr className="border-hrColor pt-10 w-[50%]" />
               <Flex className="gap-x-8">
                  <Heading className={`uppercase font-medium`} txt={"Color:"} as={"h4"} />
                  <Flex className={`gap-x-2`}>
                     <div className="bg-[#979797] w-5 h-5 cursor-pointer duration-300 transition-all hover:w-7.5 hover:h-7.5 rounded-full"></div>
                     <div className="bg-[#FF8686] w-5 h-5 cursor-pointer duration-300 transition-all hover:w-7.5 hover:h-7.5 rounded-full"></div>
                     <div className="bg-[#7ED321] w-5 h-5 cursor-pointer duration-300 transition-all hover:w-7.5 hover:h-7.5 rounded-full"></div>
                     <div className="bg-[#B6B6B6] w-5 h-5 cursor-pointer duration-300 transition-all hover:w-7.5 hover:h-7.5 rounded-full"></div>
                     <div className="bg-[#15CBA5] w-5 h-5 cursor-pointer duration-300 transition-all hover:w-7.5 hover:h-7.5 rounded-full"></div>
                  </Flex>
               </Flex>
               <Flex className={`gap-x-13 py-7.5 `}>
                  <Heading className={`uppercase font-medium`} txt={"Size:"} as={"h4"} />
                  <div className="relative">
                     <select className=" border-gray-200 cursor-pointer  border py-1.5 px-5 pr-13 appearance-none">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                     </select>
                     <IoMdArrowDropdown className="absolute -z-1 top-1/2 right-0 -translate-1/2" />
                  </div>
               </Flex>
               <Flex className={`gap-x-13`}>
                  <Heading className={`uppercase font-medium`} txt={"Size:"} as={"h4"} />
                  <div className="flex gap-x-4 border-gray-200 border py-1.5 px-5">
                     <button className="" onClick={handleDec}>-</button>
                     <p>{count}</p>
                     <button className="" onClick={handleInc} >+</button>
                  </div>
               </Flex>
               <hr className="border-hrColor my-10 w-[50%]" />
              <Flex className="gap-x-7.5">
                <Heading className={`uppercase font-medium`} txt={"Status:"} as={"h4"} />
               <p className="text-textColor">In Stock</p>
              </Flex>
               <hr className="border-hrColor my-10 w-[50%]" />

            </Container>

         </section>
      </>
   )
}

export default ProductPage