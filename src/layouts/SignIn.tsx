import React, {useState} from 'react';
import "../styles/layouts/form-authorization.scss"
import Input from "../components/Input";
import HyperLink from "../components/HyperLink";
import Submit from "../components/Submit";
import {AuthorizationAPI} from "../api/AuthorizationAPI";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchSignUp = async () => {
        if (username.length <= 6 || password.length <= 6) {
            return;
        }

        AuthorizationAPI.signIn(username, password).then((result) => {
            if (result) {
                window.location.href = "/home";
            } else {
                alert("user don`t found!");
            }
        });
    }

    return (
        <div className={"form"}>
            <h1 className={"title"}>Sign In</h1>

            <Input type={"text"} name={"Username"} getterInformation={setUsername}/>
            <Input type={"password"} name={"Password"} getterInformation={setPassword}/>

            <div className={"links"}>
                <HyperLink value={"Forgot password?"} url={"/"}/>
                <HyperLink value={"Sign Up"} url={"/authorization/sign-up"}/>
            </div>

            <Submit value={"Sig In"} onClick={fetchSignUp}/>
        </div>
    );
};

export default SignIn;