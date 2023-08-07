import "../styles/components/button-link.scss"
import React from 'react';

interface ButtonLinkProps{
    url: string,
    value: string
}

const ButtonLink = (props: ButtonLinkProps) => {
    return (
        <div className={"button-link"}>
            <a className={"link"} href={props.url}>{props.value}</a>
        </div>
    );
};

export default ButtonLink;