import React, {useState} from 'react';
import "../styles/components/input.scss";

interface InputProps {
    type: string,
    name: string,
    getterInformation: (field: string) => void;
}

const Input = (props: InputProps) => {

    const inputId = "inputId" + Math.random();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.getterInformation(event.target.value);
        console.log("test");
    };

    return (
        <div className={"input-box"}>
            <input id={inputId} className={"input"} type={props.type}
                   onChange={(evt) => handleInputChange(evt)}
                   required/>
            <span>{props.name}</span>
            <i></i>
        </div>
    );
};

export default Input;