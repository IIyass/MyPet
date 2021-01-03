import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Home from './container/Home/Home';
import Find from './container/AddNewPet/index'
import RouteWrapper from './hooks/RouteWrapper.jsx';
import RouteStepper from './hooks/StepRoute';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper path="/" exact component={Home} />
        <RouteStepper path="/find" exact component={Find} />
      </Switch>
    </ BrowserRouter>

  );
};

export default App;