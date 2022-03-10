import React from 'react'
import styles from './Main.module.css';
import containerStyle from './../../common/Container.module.css'
import myPhoto from './img/IMG_8607 (1).jpg'

function Main() {

    return (
        <div id={'aboutMe'} className={styles.mainBlock}>
            <div className={`${containerStyle.container} ${styles.inContainer}`}>
                <div className={styles.greeting}>
                    <span>Hi There.</span>
                    <h1>I am <br/>Nikolai Zarezako</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photoContainer}>
                    <img className={styles.photo} src={myPhoto} alt="Nikolai Zarezako"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
