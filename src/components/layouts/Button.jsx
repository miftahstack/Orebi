import React from "react";

const Button = (props) => {
  return (
    <button className={`bg-black text-white px-10 py-3`} type="button">
      {props.txt}
    </button>
  );
};

export default Button;
