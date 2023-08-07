import "../styles/components/nav-link.scss"
import React from 'react';

interface NavLinkProps{
    url: string,
    value: string
}

const NavLink = (props: NavLinkProps) => {
    return (
        <a className={"nav-link"} href={props.url}>{props.value}</a>
    );
};

export default NavLink;