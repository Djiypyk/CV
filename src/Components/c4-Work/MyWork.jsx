import React from 'react'
import styles from './MyWork.module.css';
import containerStyle from './../../common/Container.module.css';
import {PreviewWork} from "./PreviewWork/PreviewWork";
import todolist from './img/todolist.png'
import socialWork from './img/socialNetwork.jpg'
import cardApp from './img/cardApp.png'
import Fade from 'react-reveal/Fade';

function MyWork() {

    return (
        <div id={'MyWork'} className={styles.myWorkContainer}>
            <Fade left>
                <div className={containerStyle.container}>
                    <h2>My Work</h2>
                    <div className={styles.previewWorkContainer}>

                        <PreviewWork photo={todolist} projectName={'TodoList'}
                                     workUrl={'https://djiypyk.github.io/incubator-todo/'}
                                     description={'Stack: CSS, JS/TS, React, Redux, Redux-Thunk, Axios, Formik, MUI. Using TypeScript for best code control. Refactoring, bug fix, deploying. For test: Unit Test, snapshots.'}/>

                        <PreviewWork photo={socialWork} projectName={'Social Network'}
                                     workUrl={'https://Djiypyk.github.io/social-network'}
                                     description={'Stack: JS/TS, React, Redux, Redux-Thunk, Axios, Formik, MUI. Using TypeScript for best code control. Reusable components development. Refactoring, bug fix, deploying. Covering code with unit tests.'}/>
                        <PreviewWork photo={cardApp} projectName={'Card Learn App'}
                                     workUrl={'https://theidiet.github.io/group_projest '}
                                     description={'Stack: SCSS, JS/TS, React, Redux-Toolkit, Redux-Saga, Axios, Formik. Team work with github. Using TypeScript for best code control. Refactoring, bug fix, deploying.'}/>
                    </div>

                </div>
            </Fade>
        </div>
    )
}

export default MyWork