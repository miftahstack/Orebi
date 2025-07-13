import React from "react";

const Button = (props) => {
  return (
    <button className={props.className} type="button">
      {props.txt}
    </button>
  );
};

export default Button;
