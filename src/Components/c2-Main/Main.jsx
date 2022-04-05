import React from 'react'
import styles from './Main.module.css';
import containerStyle from './../../common/Container.module.css'
import myPhoto from './img/IMG_8607 (1).jpg'
import {Button} from "../../common/Button/Button";
import CV from './img/CV.pdf'
import Bounce from 'react-reveal/Bounce';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

function Main() {

    return (
        <div id={'aboutMe'} className={styles.mainBlock}>

            <div className={containerStyle.container}>
                <div className={styles.inContainer}>
                    <Bounce left>
                        <Tilt className="Tilt" options={{max: 25}} style={{height: 300, width: 300}}>
                            <div className={styles.photoContainer}>
                                <img className={styles.photo} src={myPhoto} alt="Nikolai Zarezako"/>
                            </div>
                        </Tilt>
                    </Bounce>
                    <Bounce right>
                        <div className={styles.greeting}>
                            <h1>I'm Mikalai Zarazaka</h1>
                            <ReactTypingEffect speed={100}
                                               text={["Frontend Developer"]}
                            />
                            <p>I'm Front-End developer with experience in creating SPA using
                                React, Redux, HTML/CSS, JS/TS and etc. In my free time I improve my
                                English and learn new technologies. In the
                                future I want to study Angular, Vue.
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
