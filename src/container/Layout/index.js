import React from 'react';
import Footer from '../../components/Footer';
import { Container } from '../../common';

const Layout = ({ children }) => (
    <>
        {children}
        <Footer />
    </>
);

export default Layout;