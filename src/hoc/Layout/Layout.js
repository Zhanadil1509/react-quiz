import React, {Component} from 'react'
import {Layouts} from "./style";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({menu: !this.state.menu})
    }

    render() {
        return (
            <Layouts>
              <Drawer isOpen={this.state.menu} />
              <MenuToggle
                  onToggle={this.toggleMenuHandler}
                  isOpen={this.state.menu}
              />
              <main>
                {this.props.children}
              </main>
            </Layouts>
        )
    }
}

export default Layout