import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./../NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className='navigation-items'>
      <NavigationItem link='/'>Burger Builder</NavigationItem>
      <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
