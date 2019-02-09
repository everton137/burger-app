import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  // in the ES6 method bellow, this will refer to the class Layout
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
  // the method bellow doesn't work
  //    this.setState({showSideDrawer: !this.state.showSideDrawer})
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    }); 
  }

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler} />
        <main className="Content">
          {this.props.children}
        </main>
      </Aux>
    )
  }
}


export default Layout;
