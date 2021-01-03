import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../components/Header'
import { Wrapper } from '../common'

const StepRoute = ({ component: Component, ...rest }) => {


    return (
        <Wrapper>
            <NavBar />
            <Route {...rest} render={(props) => <Component {...props} />} />
        </Wrapper>
    );
};

export default StepRoute;