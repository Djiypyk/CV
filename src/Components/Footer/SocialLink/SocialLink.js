import React from "react";
import styles from './SocialLink.module.css'

export function SocialLink(props) {

    return (
        <a target='_blank' rel="noreferrer"
           href={props.socialLink}>
                <img className={styles.footer_img} src={props.img} alt=""/>
        </a>

    )
}