import React from "react";
import './App.css';
import Header from "./Components/c1-Header/Header";
import Main from "./Components/c2-Main/Main";
import Skills from "./Components/c3-Skills/Skills";
import MyWork from "./Components/c4-Work/MyWork";
import {FindWork} from "./Components/c5-LookingFob/FindWork";
import {ContactsForm} from "./Components/c6-Contacts/ContactsForm";
import {Footer} from "./Components/c7-Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWork/>
            <FindWork/>
            <ContactsForm/>
            <Footer/>
        </div>
    );
}

export default App;
