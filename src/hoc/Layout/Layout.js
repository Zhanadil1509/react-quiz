import React, {Component} from 'react'
import {Layouts} from "./style";

class Layout extends Component {
    render() {
        return (
            <Layouts>
                Layout
              <main>
                {this.props.children}
              </main>
            </Layouts>
        )
    }
}

export default Layout