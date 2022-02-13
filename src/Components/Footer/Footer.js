import React from "react";
import styles from './Footer.module.css'
import containerStyles from './../../common/Container.module.css'
import {SocialLink} from "./SocialLink/SocialLink";

export function Footer() {

    return (
        <div className={styles.footerWrapper}>
            <div className={containerStyles.container}>
                <h3 style={{marginTop: '5px'}}>Nikolai Zarezako</h3>
                <div className={styles.squareWrapper}>
                    <SocialLink socialLink={'https://github.com/Djiypyk'}/>
                    <SocialLink socialLink={'https://www.instagram.com/zarezako.nick/'}/>
                    <SocialLink socialLink={'https://t.me/Djiypyk'}/>
                    <SocialLink socialLink={'https://www.linkedin.com/in/nikolai-zarezako-99592121a/'}/>
                </div>
                <span> &copy; 2022 Все права защищены</span>
            </div>
        </div>
    )
}