import React from 'react'
import styles from './Header.module.css';
import Nav from "./Nav/Nav";
import containerStyle from './../../common/Container.module.css'
import {NavBurger} from "./NavBurger/NavBurger";

function Header() {

    return (
        <div className={styles.header}>
            <div className={containerStyle.container + ' ' + styles.navPosition}>
                <Nav/>
                <NavBurger/>
            </div>
        </div>
    );
}

export default Header;
