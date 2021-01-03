import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../container/Layout';
import NavBar from '../components/Header'
import { Wrapper } from '../common'

const RouteWrapper = ({ component: Component, ...rest }) => {


    return (
        <Wrapper>
            <NavBar />
            <Layout >
                <Route {...rest} render={(props) => <Component {...props} />} />
            </Layout >
        </Wrapper>
    );
};

export default RouteWrapper;