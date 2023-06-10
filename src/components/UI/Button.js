import React from "react";
import classes from "./Button.module.css";

const Button = (boutput) => {
  return (
    <button
      className={classes.button}
      type={boutput.type || "button"}
      onClick={boutput.onClick}
    >
      {boutput.children}
    </button>
  );
};
export default Button;
