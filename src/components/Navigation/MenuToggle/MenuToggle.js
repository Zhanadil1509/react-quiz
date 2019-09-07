import React from 'react';
import {MenuToggles} from './style'

const MenuToggle = (p) => {
    const burger = p.isOpen ? 'change' : null

    return (
        <MenuToggles
            className={burger}
            onClick={p.onToggle}
        >
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
        </MenuToggles>
    );
};

export default MenuToggle;
