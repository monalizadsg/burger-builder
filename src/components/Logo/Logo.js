import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import "./Logo.css";

const Logo = () => (
  <div className='logo'>
    <img src={burgerLogo} alt='Myburger' />
  </div>
);

export default Logo;
