import React from 'react'
import styles from './Skills.module.css';
import containerStyle from './../../common/Container.module.css';
import Skill from "./Skill/Skill";

function Skills() {

    return (
        <div className={styles.skillsBlock}>
            <div className={containerStyle.container}>
                <h2 className={styles.title}>My Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"CSS"} description={'loream loream text text text loream loream...'}/>
                    <Skill title={"JS"} description={'loream loream loream loream...'}/>
                    <Skill title={"React"} description={'loream loream loream loream...'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills