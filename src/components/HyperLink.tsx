import React from 'react';
import "../styles/components/hyper-link.scss"

interface HyperLinkProps {
    url: string,
    value: string
}

const HyperLink = (props: HyperLinkProps) => (
    <a className={"hyper-link"} href={props.url}>{props.value}</a>
);

export default HyperLink;