// Own Components
import { Link } from "react-router-dom";
import Container from "../Container";
// Own Components


// React Icon
import { PiGreaterThan } from "react-icons/pi";
import { useSelector } from "react-redux";
import Button from "../layouts/Button";
import Heading from "../Heading";
// React Icon

const Cart = () => {
   const data = useSelector((state) => state.cart.value)
   console.log(data);

   return (
      <>
         <Container>
            <div className="py-20">
               <Heading
                  className="text-5xl font-bold text-texProductColor"
                  txt="Cart"
                  as="h3"
               />
               <div className="flex items-center gap-x-1 mt-2">
                  <Link to="/">
                     <Heading className="text-textColor" txt="Home" as="p" />
                  </Link>
                  <span className="text-[12px] text-textColor mt-1">
                     <PiGreaterThan />
                  </span>
                  <Heading className="text-textColor cursor-pointer" txt="Cart" as="p" />
               </div>
            </div>
         </Container>

         <Container className="pb-20">

            <div className="bg-gray-100 flex justify-between items-center p-5 font-bold">
               <div className="flex-1">Product</div>
               <div className="w-75 text-center">Price</div>
               <div className="w-75 text-center">Quantity</div>
               <div className="w-75 text-center">Total</div>
               <div className="w-8"></div>
            </div>

            {/* Dynamic Items */}
            {data.map((item, index) => (
               <div key={index} className="p-5 flex justify-between items-center border-b">
                  <div className="flex items-center flex-1">
                     <img className="w-20 h-20 object-cover mr-4" src={item.img} alt={item.alt} />
                     <span>{item.title}</span>
                  </div>
                  <div className="w-75 text-center">{item.price}</div>
                  <div className="w-75 text-center">{item.quantity}</div>
                  <div className="w-75 text-center">  {item.price.replace("$", "")*item.quantity }</div> 
                  
                  <div className="w-8"></div>
               </div>
            ))}

            {/* Static Item */}
            <div className="p-5 flex justify-between items-center border-b border-gray-300">
               <div className="flex-1">Product 01</div>
               <div className="w-75 text-center">$99.00</div>
               <div className="w-75 text-center">01</div>
               <div className="w-75 text-center">$99.00</div>
               <div className="w-8"></div>
            </div>
            <div className="p-5 flex justify-between items-center border-b border-gray-300">
               <div className="flex-1">Product 02</div>
               <div className="w-75 text-center">$37.00</div>
               <div className="w-75 text-center">01</div>
               <div className="w-75 text-center">$37.00</div>
               <div className="w-8"></div>
            </div>
            <div className="p-5 flex justify-between items-center border-b border-gray-300">
               <div className="flex-1">Product 03</div>
               <div className="w-75 text-center">$81.00</div>
               <div className="w-75 text-center">02</div>
               <div className="w-75 text-center">$162.00</div>
               <div className="w-8"></div>
            </div>
         </Container>


         <Container className={`flex justify-end pb-20`}>
            <div className="text-right">
               <Heading className={`font-bold`} txt={"Cart totals"} as={'h4'} />
               <div className="border text-left border-gray-200 my-5">
                  <div className="flex border-b border-gray-200">
                     <p className="w-[200px] border-r border-gray-200 p-2">Subtotal</p>
                     <p className="w-[200px] border-r border-gray-200 p-2">$278.00</p>
                     
                  </div>

                  <div className="flex">
                     <p className="w-[200px] border-r border-gray-200 p-2">Total</p>
                     <p className="w-[200px] p-2">$278.00</p>
                  </div>
               </div>
               <Button className={`px-5 !text-[14px] text-right`} txt={`Proceed to Checkout`} />
            </div>
         </Container>
      </>
   );
};

export default Cart;
