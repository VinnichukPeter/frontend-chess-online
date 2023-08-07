import React from 'react';
import "../styles/components/input.scss";

interface InputProps {
    type: string,
    name: string
}

const Input = (props: InputProps) => {
    return (
        <div className={"input-box"}>
            <input className={"input"} type={props.type} required/>
            <span>{props.name}</span>
            <i></i>
        </div>
    );
};

export default Input;