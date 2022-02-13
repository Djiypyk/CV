import React from 'react'
import styles from './Main.module.css';
import containerStyle from './../../common/Container.module.css'
import myPhoto from './img/IMG_8607 (1).jpg'

function Main() {

    return (
        <div className={styles.mainBlock}>
            <div className={`${containerStyle.container} ${styles.inContainer}`}>
                <div className={styles.greeting}>
                    <span>Hi There.</span>
                    <h1>I am <br/>Nikolai Zarezako</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}>
                    <img style={{width: '100%'}} src={myPhoto} alt="Nikolai Zarezako"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
