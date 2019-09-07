import React, {Component} from 'react';
import {Drawers} from "./style";
import BackDrop from "../../UI/BackDrop/BackDrop";

const links = [
    1, 2, 3
]

class Drawer extends Component {
    renderLinks = () => links.map((v, i) => {
        return (
            <li key={i}>
                <a href="">Link {v}</a>
            </li>
        )
    })

    render() {
        return (
            <>
                { this.props.isOpen ? <BackDrop onDrop={this.props.onClose} /> : null }
                <Drawers className={this.props.isOpen ? 'open' : 'close'}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </Drawers>
            </>
        );
    }
}

export default Drawer;