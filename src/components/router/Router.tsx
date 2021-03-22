import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from 'constants/routes';
import Issuer from 'pages/issuer/Issuer';


const Router = () => {
    return (
      <Switch>
        <Route exact path={routes.ROOT} component={Issuer} />
      </Switch>
    )
}

export default Router;
