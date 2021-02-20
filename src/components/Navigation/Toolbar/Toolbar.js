import React from "react";
import "./Toolbar.css";
import Logo from "./../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "./../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  return (
    <header className='toolbar'>
      <div>
        <DrawerToggle clicked={props.drawerToggleClicked} />
      </div>
      <div>
        <Logo />
      </div>
      <nav className='desktop-only'>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
