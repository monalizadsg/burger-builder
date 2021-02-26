import React from "react";
import "./Input.css";

const Input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input className='input-element' {...props} />;
      break;
    case "textare":
      inputElement = <textarea className='input-element' {...props} />;
      break;
    default:
      inputElement = <input className='input-element' {...props} />;
  }

  return (
    <div className='input'>
      <label className='label'>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
