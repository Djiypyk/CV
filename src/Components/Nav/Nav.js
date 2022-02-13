import React from 'react'
import styles from './Nav.module.css';

function Nav() {

    return (
        <div className={styles.nav}>
            <a href="/#">About</a>
            <a href="/#">Skills</a>
            <a href="/#">Project</a>
            <a href="/#">Contact</a>
        </div>
    );
}

export default Nav;
