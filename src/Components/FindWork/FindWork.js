import React from "react";
import styles from './FindWork.module.css'
import containerStyles from './../../common/Container.module.css'

export function FindWork() {

    return (
        <div className={styles.findWorkWrapper}>
            <div className={containerStyles.container}>
                <div className={styles.findWorkItem}>
                    <div>
                        <h2>Looking for a job:</h2>
                        <p style={{margin: '0 0 5px 0'}}>Office. With the possibility of relocation.</p>
                        <p style={{margin: '0 0 5px 0'}}>Or</p>
                        <p style={{margin: '0 0 10px 0'}}>Remote Work</p>
                    </div>
                    <div className={styles.buttonLink}>
                        <a href="#recrutingForm">Write me</a>
                    </div>
                </div>

            </div>

        </div>
    )
}