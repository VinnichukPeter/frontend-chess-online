import "../styles/layouts/main.scss";
import React from 'react';
import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <div className={"MainContainer"}>
            <Outlet/>
        </div>
    );
};

export default Main;