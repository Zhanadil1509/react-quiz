import React, {Component} from 'react';
import {Drawers} from "./style";
import BackDrop from "../../UI/BackDrop/BackDrop";
import {LeftMenu} from './style'

const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false}
]

class Drawer extends Component {

    renderLinks = () => links.map((v, i) => {
        return (
            <li key={i}>
                <LeftMenu
                    to={v.to}
                    exact={v.exact}
                    activeClassName={'active'}
                    onClick={this.props.onClose}
                >{v.label}</LeftMenu>
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