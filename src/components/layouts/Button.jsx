
const Button = ({txt,className}) => {
  return (
    <button className={`hover:bg-white hover:!text-black outline-1 outline-black duration-300  bg-black px-5 cursor-pointer py-3 text-[18px] text-white ${className}`} type="button">
      {txt}
    </button>
  );
};

export default Button;
