import React from 'react'
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import MyWork from "./Components/Work/MyWork";
import {FindWork} from "./Components/FindWork/FindWork";
import {RecruiterForm} from "./Components/RecruiterForm/RecruiterForm";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWork/>
            <FindWork/>
            <RecruiterForm/>
            <Footer/>
        </div>
    );
}

export default App;
