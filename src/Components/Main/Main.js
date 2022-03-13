import React from 'react'
import styles from './Main.module.css';
import containerStyle from './../../common/Container.module.css'
import myPhoto from './img/IMG_8607 (1).jpg'

function Main() {

    return (
        <div id={'aboutMe'} className={styles.mainBlock}>
            <div className={`${containerStyle.container} ${styles.inContainer}`}>
                <div className={styles.greeting}>
                    <p>Hi There.</p>
                    <h1 style={{fontSize: '25px'}}>I am <span className={styles.mainName}>Mikalai Zarazaka</span></h1>
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
