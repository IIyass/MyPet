import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Logo, NavBar } from './style'

const Header = () => {

    return (
        <Wrapper>

            <Logo>
                <Link to="/">LOGO</Link>
            </Logo>
            <NavBar>
                <Link to="/find">Trouvez une famille</Link>
            </NavBar>

        </Wrapper>
    );
};

export default Header;