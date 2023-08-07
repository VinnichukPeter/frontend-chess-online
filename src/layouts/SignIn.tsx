import React from 'react';
import "../styles/layouts/form-authorization.scss"
import Input from "../components/Input";
import HyperLink from "../components/HyperLink";
import Submit from "../components/Submit";

const SignIn = () => {
    return (
        <form className={"form"}>
            <h1 className={"title"}>Sign In</h1>

            <Input type={"text"} name={"Username"}/>
            <Input type={"password"} name={"Password"}/>

            <div className={"links"}>
                <HyperLink value={"Forgot password?"} url={"/"}/>
                <HyperLink value={"Sign Up"} url={"/authorization/sign-up"}/>
            </div>

            <Submit value={"Sig In"} onClick={()=>{}}/>
        </form>
    );
};

export default SignIn;