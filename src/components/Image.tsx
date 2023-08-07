import "../styles/components/image.scss"
import React from 'react';

interface ImageProps {
    url: string,
    alt: string,
    width: string,
    height: string
}

const Image = (props: ImageProps) => {
    return (
        <div className={"image-container"} style={{width: props.width, height: props.height}}>
            <img src={props.url} alt={props.alt}/>
        </div>
    );
};

export default Image;