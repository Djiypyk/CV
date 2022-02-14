import React from "react";
import styles from './RecruiterForm.module.css'
import containerStyles from './../../common/Container.module.css'

export function RecruiterForm() {


    return (
        <div className={styles.formWrapper}>
            <div className={containerStyles.container}>
                <div className={styles.formContent}>
                    <h2>Contacts</h2>
                    <div className={styles.formItemWrapper}>
                        <form action="">
                            <div>
                                <input placeholder={'Name'} className={styles.inputForm} type="text" id='name'
                                       required/>
                                <input placeholder={'Email'} className={styles.inputForm} type="email" id='email'
                                       required/>
                                <textarea placeholder={'Write your message'} className={styles.textAreaFrom} required
                                          name="RecruiterMessage" id="textAreaForm"
                                />
                            </div>
                        </form>
                    </div>
                    <input className={styles.sendButton} type="submit" value={'Send Message'}/>
                </div>
            </div>
        </div>
    )

}