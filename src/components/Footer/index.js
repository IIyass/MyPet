import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Logo, NavBar } from './style'

const Footer = () => (
    <Wrapper>

        <Logo>
            <Link to="/">LOGO</Link>
        </Logo>
        <NavBar>
            <a>Social Links</a>
        </NavBar>

    </Wrapper>

);

export default Footer;