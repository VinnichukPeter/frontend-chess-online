import "../styles/base.scss";
import React from 'react';
import Header from "../layouts/Header";
import Main from "../layouts/Main";

const Base = () => {
    return (
        <div className={"wrapper"}>
            <header className={"header"}>
                <Header/>
            </header>

            <main className={"main"}>
                <Main/>
            </main>

            <footer className={"footer"}>
                <p>Copyright by &copy;VinBee - 2021</p>
            </footer>
        </div>
    );
};

export default Base;