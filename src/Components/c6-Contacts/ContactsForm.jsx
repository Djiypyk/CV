import React from "react";
import styles from './ContactsForm.module.css'
import containerStyles from './../../common/Container.module.css'
import {useFormik} from "formik";

export function ContactsForm() {

    const formik = useFormik({
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length < 5) {
                errors.name = 'Invalid name';
            }
        },
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
                            <input placeholder={'Name'}
                                   className={styles.inputForm}
                                   type="text"
                                   {...formik.getFieldProps('name')}
                            />
                            <br/>
                            <input placeholder={'Email'}
                                   className={styles.inputForm}
                                   type="text"
                                   {...formik.getFieldProps('email')}
                            />
                            <textarea placeholder={'Write your message'}
                                      className={styles.textAreaFrom}
                                      {...formik.getFieldProps('textarea')}
                            />
                            <button className={styles.sendButton} type="submit">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )

}