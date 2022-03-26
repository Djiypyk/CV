import React from "react";
import styles from './FindWork.module.css'
import containerStyles from './../../common/Container.module.css'

export function FindWork() {

    return (
        <div className={styles.findWorkWrapper}>
            <div className={containerStyles.container}>
                <div className={styles.findWorkItem}>
                    <h2>Looking for a job:</h2>
                    <div>
                        <p>Office. With the possibility of relocation.</p>
                        <p>Or</p>
                        <p>Remote Work</p>
                    </div>
                </div>
            </div>
        </div>
    )
}