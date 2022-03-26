import React from 'react'
import styles from './MyWork.module.css';
import containerStyle from './../../common/Container.module.css';
import {PreviewWork} from "./PreviewWork/PreviewWork";
import todolist from './img/todolist.png'
import socialWork from './img/socialNetwork.jpg'

function MyWork() {


    return (
        <div id={'MyWork'} className={styles.myWorkContainer}>
            <div className={containerStyle.container}>
                <h2>My Work</h2>
                <div className={styles.previewWorkContainer}>
                    <PreviewWork photo={todolist} projectName={'TodoList'}
                                 workUrl={'https://djiypyk.github.io/incubator-todo/'}
                                 description={'Stack: CSS, JS/TS, React, Redux, Redux-Thunk, Axios, Formik, MUI. Using TypeScript for best code control. Refactoring, bug fix, deploying. For test: Unit Test, snapshots.'}/>
                    <PreviewWork photo={socialWork} projectName={'Social Network'}
                                 workUrl={'https://Djiypyk.github.io/social-network'}
                                 description={'Stack: JS/TS, React, Redux, Redux-Thunk, Axios, Formik, MUI. Using TypeScript for best code control. Reusable components development. Refactoring, bug fix, deploying. Covering code with unit tests.'}/>
                </div>

            </div>
        </div>
    )
}

export default MyWork