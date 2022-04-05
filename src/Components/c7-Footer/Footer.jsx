import React from "react";
import styles from './Footer.module.css'
import containerStyles from './../../common/Container.module.css'
import {SocialLink} from "./SocialLink/SocialLink";
import github from './assets/img/github.svg'
import instagram from './assets/img/instagram.svg'
import telegram from './assets/img/telegram.svg'
import linkedIn from './assets/img/linkedin.svg'

export function Footer() {

    return (
        <div className={styles.footerWrapper}>
            <div className={containerStyles.container}>
                <h3>Mikalai Zarazaka</h3>
                <div className={styles.squareWrapper}>
                    <SocialLink img={github} socialLink={'https://github.com/Djiypyk'}/>
                    <SocialLink img={instagram} socialLink={'https://www.instagram.com/zarezako.nick/'}/>
                    <SocialLink img={telegram} socialLink={'https://t.me/Djiypyk'}/>
                    <SocialLink img={linkedIn} socialLink={'https://www.linkedin.com/in/nikolai-zarezako-99592121a/'}/>
                </div>
                <span className={styles.footerItem}> &copy; 2022 Все права защищены</span>
            </div>
        </div>
    )
}