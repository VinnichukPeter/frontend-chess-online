import React, {useState} from 'react';
import Input from "../components/Input";
import HyperLink from "../components/HyperLink";
import Submit from "../components/Submit";
import {redirect} from "react-router-dom";
import {AuthorizationAPI} from "../api/AuthorizationAPI";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const fetchSignUp = async () => {
        if (username.length <= 6 || password.length <= 6 || password !== confirmPassword) {
            return;
        }

        AuthorizationAPI.signUp(username, password).then((result) => {
            if (result) {
                window.location.href = "/authorization/sign-in";
            } else {
                alert("this username is used!");
            }
        });
    }
    return (
        <div className={"form"}>
            <h1 className={"title"}>Sign Up</h1>

            <Input type={"text"} name={"Username"} getterInformation={setUsername}/>
            <Input type={"password"} name={"Password"} getterInformation={setPassword}/>
            <Input type={"password"} name={"Confirm password"} getterInformation={setConfirmPassword}/>

            <div className={"links"}>
                <HyperLink value={"You have account?"} url={"/authorization/sign-in"}/>
            </div>

            <Submit value={"Sig Up"} onClick={fetchSignUp}/>
        </div>
    );
};

export default SignUp;