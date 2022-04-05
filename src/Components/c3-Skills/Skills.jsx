import React from 'react'
import styles from './Skills.module.css'
import containerStyle from './../../common/Container.module.css';
import Skill from "./Skill/Skill";
import CSS from './assets/skillsImg/css.svg'
import JS from './assets/skillsImg/js.svg'
import TS from './assets/skillsImg/type.svg'
import ReactImg from './assets/skillsImg/react.svg'
import ReduxImg from './assets/skillsImg/redux.svg'

function Skills() {

    return (
        <div id={'skills'} className={styles.skillsBlock}>
            <div className={containerStyle.container}>
                <h2>My Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"HTML & CSS"} img={CSS}/>
                    <Skill title={"JS"} img={JS}/>
                    <Skill title={"TS"} img={TS}/>
                    <Skill title={"React/Thunk"} img={ReactImg}/>
                    <Skill title={"Redux/Toolkit"} img={ReduxImg}/>
                </div>
            </div>
        </div>
    )
}

export default Skills