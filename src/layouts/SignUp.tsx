import React from 'react';
import Input from "../components/Input";
import HyperLink from "../components/HyperLink";
import Submit from "../components/Submit";

const SignUp = () => {
    return (
        <form className={"form"}>
            <h1 className={"title"}>Sign Up</h1>

            <Input type={"text"} name={"Username"}/>
            <Input type={"password"} name={"Password"}/>
            <Input type={"password"} name={"Confirm password"}/>

            <div className={"links"}>
                <HyperLink value={"You have account?"} url={"/authorization/sign-in"}/>
            </div>

            <Submit value={"Sig Up"} onClick={()=>{}}/>
        </form>
    );
};

export default SignUp;