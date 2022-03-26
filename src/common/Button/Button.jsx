import React from "react";
import styles from './Button.module.css'

export const Button = ({link, download, text}) => {

    return <a className={styles.button} download={download} href={link}>
        {text}
    </a>
}

