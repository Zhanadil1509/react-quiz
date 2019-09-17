import React, {Component} from 'react'
import {Layouts} from "./style";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import {connect} from "react-redux";

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({menu: !this.state.menu})
    }

    menuCloseHandler = () => {
        this.setState({menu: false})
    }

    render() {
        return (
            <Layouts>
              <Drawer
                  isOpen={this.state.menu}
                  onClose={this.menuCloseHandler}
                  isAuthenticated={this.props.isAuthenticated}
              />
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

const mapStateToProp = (state) => {
    return {
      isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProp)(Layout)