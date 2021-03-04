import React from "react";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={`side-drawer ${props.open ? "open" : "close"}`}>
        <div className='side-drawer-logo'>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
