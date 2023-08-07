import React from 'react';
import {Outlet} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/logo.svg";
import "../styles/authorization.scss"

const Authorization = () => {
    return (
        <div className={"authorization"}>
            <div className={"border"}>
                <div className={"container"}>
                    <div className={"logo-container"}>
                        <div className={"logo"}>
                            <Logo/>
                        </div>
                    </div>

                    <div className={"form-container"}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authorization;