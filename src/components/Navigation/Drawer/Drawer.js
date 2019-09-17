import React, {Component} from 'react';
import {Drawers} from "./style";
import BackDrop from "../../UI/BackDrop/BackDrop";
import {LeftMenu} from './style'

class Drawer extends Component {

    renderLinks = (links) => links.map((v, i) => {
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
      const links = [
        {to: '/', label: 'Список', exact: true}
      ]
      if(this.props.isAuthenticated) {
        links.push({to: '/quiz-creator', label: 'Создать тест', exact: false})
        links.push({to: '/logout', label: 'Выйти', exact: false})
      } else {
        links.push({to: '/auth', label: 'Авторизация', exact: false})
      }
        return (
            <>
                { this.props.isOpen ? <BackDrop onDrop={this.props.onClose} /> : null }
                <Drawers className={this.props.isOpen ? 'open' : 'close'}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </Drawers>
            </>
        );
    }
}

export default Drawer;