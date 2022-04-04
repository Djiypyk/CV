import React from 'react'
import styles from './Main.module.css';
import containerStyle from './../../common/Container.module.css'
import myPhoto from './img/IMG_8607 (1).jpg'
import {Button} from "../../common/Button/Button";
import CV from './img/CV.pdf'
import Bounce from 'react-reveal/Bounce';
import ReactTypingEffect from 'react-typing-effect';

function Main() {

    return (
        <div id={'aboutMe'} className={styles.mainBlock}>

                <div className={containerStyle.container}>
                    <div className={styles.inContainer}>
                        <Bounce left>
                        <div className={styles.photoContainer}>
                            <img className={styles.photo} src={myPhoto} alt="Nikolai Zarezako"/>
                        </div>
                        </Bounce>
                        <Bounce right>
                        <div className={styles.greeting}>
                            <h1>I'm Mikalai Zarazaka</h1>
                            <ReactTypingEffect speed={100}
                                text={["Frontend Developer"]}
                            />
                            {/*<span>Frontend Developer</span>*/}
                            <p>I enjoy programming and would like to succeed in software development career. I
                                constantly
                                polish my tech skills, study new technologies and improve my English. In the future I
                                want
                                to study Angular, Vue.
                            </p>
                            <div className={styles.buttonDownload}>
                                <Button link={CV} download={true} text={'Download CV'}/>
                            </div>
                        </div>
                        </Bounce>
                    </div>
                </div>

        </div>
    );
}

export default Main;
