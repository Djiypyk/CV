import React from "react";
import styles from './PreviewWork.module.css'


export function PreviewWork(props) {

    return (
        <div className={styles.previewWork}>
            <div className={styles.previewWorkImage}>
                <a target="_blank" rel="noopener noreferrer" href={props.workUrl}>
                    <img style={{width: '100%'}} src={props.photo} alt="This it`s my work"/>
                    <p className={styles.previewWorkButton}>See more</p>
                </a>
            </div>
            <span className={styles.spanItem}>{props.projectName}</span>
            <p className={styles.pItem}>{props.description}</p>
        </div>
    )
}

