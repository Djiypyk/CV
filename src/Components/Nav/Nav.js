import React from 'react'
import styles from './Nav.module.css';

function Nav() {

    return (
        <div className={styles.nav}>
            <a href={"#aboutMe"}>About</a>
            <a href={"#skills"}>Skills</a>
            <a href={"#MyWork"}>Project</a>
            <a href={'#contacts'}>Contact</a>
        </div>
    );
}

export default Nav;
