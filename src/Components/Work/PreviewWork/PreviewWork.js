import React from "react";
import styles from './PreviewWork.module.css'


export function PreviewWork(props) {

    return (
        <div className={styles.previewWork}>
            <div className={styles.previewWorkImage}>
                <a href={props.workUrl}>
                    <img style={{width: '100%'}} src={props.photo} alt="This it`s my work"/>
                    <p className={styles.previewWorkButton}>See more</p>
                </a>
            </div>
            <span style={{fontSize: '18px', fontWeight: '600'}}>{props.projectName}</span>
            <p style={{fontSize: '14px'}}>{props.description}</p>
        </div>
    )
}

