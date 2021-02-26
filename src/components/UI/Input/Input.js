import React from "react";
import "./Input.css";

const Input = (props) => {
  let inputElement = null;
  let validationError = null;
  let inValidClassname = "";

  if (props.invalid && props.shouldValidate && props.touched) {
    inValidClassname = "invalid";
  }

  if (props.invalid && props.touched) {
    validationError = (
      <p className='validation-error'>Please enter a valid value!</p>
    );
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={`input-element ${inValidClassname}`}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={`input-element ${inValidClassname}`}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={`input-element ${inValidClassname}`}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={`input-element ${inValidClassname}`}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className='input'>
      <label className='label'>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;
