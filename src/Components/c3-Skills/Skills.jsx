import React from 'react'
import styles from './Skills.module.css'
import containerStyle from './../../common/Container.module.css';
import Skill from "./Skill/Skill";
import CSS from './assets/skillsImg/css.svg'
import JS from './assets/skillsImg/js.svg'
import TS from './assets/skillsImg/ts.svg'
import ReactImg from './assets/skillsImg/react.svg'
import ReduxImg from './assets/skillsImg/redux.svg'

function Skills() {

    return (
        <div id={'skills'} className={styles.skillsBlock}>
            <div className={containerStyle.container}>
                <h2>My Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"CSS"} img={CSS} description={'loream loream text text text loream loream...'}/>
                    <Skill title={"JS"} img={JS} description={'loream loream loream loream...'}/>
                    <Skill title={"TS"} img={TS} description={'loream loream loream loreamm loream loream loream...'}/>
                    <Skill title={"React"} img={ReactImg} description={'loream loream loream loream...'}/>
                    <Skill title={"Redux"} img={ReduxImg} description={'loream loream loream loream...'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills