import React from 'react'
import styles from './Skill.module.css';

function Skill(props) {

    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img className={styles.icon_skill_img} src={props.img} alt="Icon"/>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>


        </div>
    )
}

export default Skill