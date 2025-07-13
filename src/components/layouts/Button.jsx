
const Button = ({txt,className}) => {
  return (
    <button className={`bg-black px-22 cursor-pointer py-3 text-[18px] text-white ${className}`} type="button">
      {txt}
    </button>
  );
};

export default Button;
