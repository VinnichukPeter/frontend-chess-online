import "../styles/components/icon-text-line.scss";
import React from 'react';

interface IconTextLineProps{
    text: string,
    icon: string
}

const IconTextLine = (props: IconTextLineProps) => {
    return (
        <div className={"icon-text-line"}>
            <h1 className={"icon"} dangerouslySetInnerHTML={{__html: props.icon}}/>
            <h1 className={"text"}>{props.text}</h1>
        </div>
    );
};

export default IconTextLine;