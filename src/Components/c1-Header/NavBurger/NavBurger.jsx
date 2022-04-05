import React, {useCallback, useState} from 'react'
import styles from './NavBurger.module.css';
import BurgerMenu from './assets/burgerMenu.svg'
import CloseBurgerMenu from './assets/closeBurger.svg'

export function NavBurger() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const burgerOpenMenu = useCallback(() => {
        setIsOpenMenu(!isOpenMenu)
    }, [isOpenMenu])

    return (
        <div className={styles.navBurger}>
            <div className={!isOpenMenu ? styles.navBurgerItems : `${styles.navBurgerItems} ${styles.show}`}>
                <a href={"#aboutMe"}>About</a>
                <a href={"#skills"}>Skills</a>
                <a href={"#MyWork"}>Project</a>
                <a href={'#contacts'}>Contacts</a>
            </div>
            <div onClick={burgerOpenMenu}>
                {isOpenMenu
                    ? <img className={styles.burgerBtn} src={CloseBurgerMenu}
                           alt="Close Burger Menu"/>
                    : <img className={styles.burgerBtn} src={BurgerMenu} alt="Burger Menu"
                    />}
            </div>
        </div>
    );
}

//
//
//
//