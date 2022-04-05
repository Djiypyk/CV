import React from "react";
import styles from './FindWork.module.css'
import containerStyles from './../../common/Container.module.css'

export function FindWork() {
    return (
        <div className={styles.findWorkWrapper}>
            <div className={containerStyles.container}>
                <div className={styles.findWorkItem}>
                    <h2>Looking for a job</h2>
                    <div className={styles.jobDescriptions}>
                        <div className={styles.aboutWork}>
                            <p>I am looking for work in the office or remotely. </p>
                            <p> It is possible to move to another city, country.</p>
                        </div>
                        <div className={styles.list}>
                            <span className={styles.importantInJob}>Important qualities of work: </span>
                            <p>A company that wants to grow.</p>
                            <p>The company values its employees.</p>
                            <p>Friendly, non-toxic staff.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}