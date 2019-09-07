import React, {Component} from 'react'
import {Layouts} from "./style";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

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