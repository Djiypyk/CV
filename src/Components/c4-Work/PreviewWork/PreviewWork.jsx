import React from "react";
import styles from './PreviewWork.module.css'


export function PreviewWork(props) {

    return (
        <article className={styles.previewWork}>
            <div className={styles.previewWorkImage}>
                <a target="_blank" rel="noopener noreferrer" href={props.workUrl}>
                    <img className={styles.work_img} src={props.photo} alt="This it`s my work"/>
                    <p className={styles.previewWorkButton}>See more</p>
                </a>
            </div>
            <div className={styles.spanItem}>
                <span>{props.projectName}</span>
            </div>
            <div className={styles.pItem}>
                <p>{props.description}</p>
            </div>
        </article>
    )
}

