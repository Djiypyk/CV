import React from "react";
import styles from './Footer.module.css'
import containerStyles from './../../common/Container.module.css'

export function Footer() {

    return (
        <div className={styles.footerWrapper}>
            <div className={containerStyles.container}>
                <h3 style={{marginTop: '5px'}}>Nikolai Zarezako</h3>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span> &copy; 2022 Все права защищены</span>
            </div>
        </div>
    )
}