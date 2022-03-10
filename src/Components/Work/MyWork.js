import React from 'react'
import styles from './MyWork.module.css';
import containerStyle from './../../common/Container.module.css';
import {PreviewWork} from "./PreviewWork/PreviewWork";
import photo from './img/borsch.jpg'

function MyWork() {


    return (
        <div className={styles.myWorkContainer}>
            <div className={containerStyle.container}>
                <h2 className={styles.title} style={{textAlign: 'center', marginBottom: '70px'}}>My Work</h2>
                <div className={styles.previewWorkContainer}>
                    <PreviewWork photo={photo} projectName={'TodoList'}
                                 workUrl={'https://djiypyk.github.io/incubator-todo/'}
                                 description={'Work work work, eat, work work work, sleep...'}/>
                    <PreviewWork photo={photo} projectName={'Social Network'}
                                 workUrl={'/#'}
                                 description={'Work work work, eat, work work work, sleep...'}/>
                </div>

            </div>
        </div>
    )
}

export default MyWork