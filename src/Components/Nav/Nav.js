import React from 'react'
import styles from './Nav.module.css';

function Nav() {

    return (
        <div className={styles.nav}>
            <a href="#aboutMe">About</a>
            <a href="#skills">Skills</a>
            <a href="/#">Project</a>
            <a href="/#">Contact</a>
        </div>
    );
}

export default Nav;
