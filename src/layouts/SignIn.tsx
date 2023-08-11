import React, {useState} from 'react';
import "../styles/layouts/form-authorization.scss"
import Input from "../components/Input";
import HyperLink from "../components/HyperLink";
import Submit from "../components/Submit";
import authorization from "../api/authorization";
import {redirect} from "react-router-dom";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchSignUp = () => {
        if (username.length <= 6 || password.length <= 6) {
            return;
        }

        if (authorization(username, password)) {
            redirect("/home");
        }
    }

    return (
        <form className={"form"}>
            <h1 className={"title"}>Sign In</h1>

            <Input type={"text"} name={"Username"} getterInformation={setUsername}/>
            <Input type={"password"} name={"Password"} getterInformation={setPassword}/>

            <div className={"links"}>
                <HyperLink value={"Forgot password?"} url={"/"}/>
                <HyperLink value={"Sign Up"} url={"/authorization/sign-up"}/>
            </div>

            <Submit value={"Sig In"} onClick={fetchSignUp}/>
        </form>
    );
};

export default SignIn;