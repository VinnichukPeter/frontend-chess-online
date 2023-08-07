import React from 'react';
import "../styles/components/submit.scss";

interface SubmitProps {
    value: string,
    onClick:  () => void
}

const Submit = (props: SubmitProps) => {
    return (
        <button className={"submit-box"} onClick={props.onClick}>
            <span>{props.value}</span>
            <span>{props.value}</span>
        </button>
    );
};

export default Submit;