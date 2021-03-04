import React from "react";
import "./Toolbar.css";
import Logo from "./../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "./../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  return (
    <header className='toolbar'>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div>
        <Logo />
      </div>
      <nav className='desktop-only'>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  );
};

export default Toolbar;
