import React from 'react';
import HyperLink from "../components/HyperLink";
import "../styles/not-found.scss"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className={"title"}>404</h1>
            <h2 className={"subTitle"}>Page not found...</h2>
            <HyperLink url={"/"} value={"Back to home page!"}/>
        </div>
    );
};

export default NotFound;