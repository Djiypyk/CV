import React from "react";
import styles from './ContactsForm.module.css'
import containerStyles from './../../common/Container.module.css'
import {useFormik} from "formik";
import Bounce from 'react-reveal/Bounce';

export function ContactsForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            textarea: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
            formik.resetForm()
            ;
        },
    })

    return (
        <div id={'contacts'} className={styles.formWrapper}>
            <div className={containerStyles.container}>
                <div className={styles.formContent}>
                    <h2>Contacts</h2>
                    <div className={styles.formItemWrapper}>
                        <form onSubmit={formik.handleSubmit}>
                            <Bounce left>
                            <div className={styles.inputWrapper}>
                                <span className={styles.text_field_label}>Name:</span> <br/>
                                <input placeholder={'Name'}
                                       className={styles.inputForm}
                                       type="text"
                                       {...formik.getFieldProps('name')}
                                />
                            </div>
                            </Bounce>
                            <Bounce right>
                            <div className={styles.inputWrapper}>
                                <span className={styles.text_field_label}>Email:</span> <br/>
                                <input placeholder={'Email'}
                                       className={styles.inputForm}
                                       type="text"
                                       {...formik.getFieldProps('email')}
                                />
                            </div>
                                </Bounce>
                            <Bounce left>
                            <textarea placeholder={'Write your message'}
                                      className={styles.textAreaFrom}
                                      {...formik.getFieldProps('textarea')}
                            />
                            </Bounce>
                            <Bounce bottom>
                            <button className={styles.sendButton} type="submit">Send Message</button>
                            </Bounce>
                            </form>
                    </div>

                </div>
            </div>
        </div>
    )

}