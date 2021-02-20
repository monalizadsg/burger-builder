import React, { Component } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  closeSideDrawer = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <div>Toolbar, SideDrawer, BackDrop</div> */}
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.closeSideDrawer}
        />
        <main className='content'>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
