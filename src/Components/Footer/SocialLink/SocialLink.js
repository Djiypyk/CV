import React from "react";
import styles from './SocialLink.module.css'

export function SocialLink(props){

    return (

            <a target='_blank' rel="noreferrer" href={props.socialLink}><div className={styles.square}> </div></a>

    )
}