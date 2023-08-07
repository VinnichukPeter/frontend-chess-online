import "../styles/layouts/header.scss";
import React from 'react';
import BrandLink from "../components/BrandLink";
import NavLink from "../components/NavLink";
import ButtonLink from "../components/ButtonLink";

const Header = () => {
    return (
        <div className={"header-container"}>
            <div className={"brand-container"}>
                <BrandLink/>
            </div>

            <div className={"nav-container"}>
                <NavLink url={"/home"} value={"home"}/>
                <NavLink url={"/about"} value={"about"}/>
                <NavLink url={"/news"} value={"news"}/>
                <NavLink url={"/shop"} value={"shop"}/>
            </div>

            <div className={"profile-container"}>
                <ButtonLink url={"/profile"} value={"profile"}/>
            </div>
        </div>
    );
};

export default Header;