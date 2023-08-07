import "../styles/components/brand-link.scss";
import React from 'react';
import {ReactComponent as Logo} from "../assets/logo.svg";

const BrandLink = () => {
    return (
        <a className={"brand"} href={"/home"}>
            <div className={"logo"}>
               <Logo/>
            </div>
            <div className={"title"}>
                <p>Chess Online</p>
            </div>
        </a>
    );
};

export default BrandLink;