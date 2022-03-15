import React from "react";
import styles from './FindWork.module.css'
import containerStyles from './../../common/Container.module.css'

export function FindWork() {

    return (
        <div className={styles.findWorkWrapper}>
            <div className={containerStyles.container}>
                <div className={styles.findWorkItem}>
                    <div>
                        <h2 className={styles.title}>Looking for a job:</h2>
                        <p>Office. With the possibility of relocation.</p>
                        <p>Or</p>
                        <p>Remote Work</p>
                    </div>
                </div>
            </div>
        </div>
    )
}