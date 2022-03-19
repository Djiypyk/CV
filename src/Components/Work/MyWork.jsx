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
                                 description={'Work work work, eat, work work work, sleep...'}/>
                    <PreviewWork photo={socialWork} projectName={'Social Network'}
                                 workUrl={'https://Djiypyk.github.io/social-network'}
                                 description={'Work work work, eat, work work work, sleep...'}/>
                </div>

            </div>
        </div>
    )
}

export default MyWork