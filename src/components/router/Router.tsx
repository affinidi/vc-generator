import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'constants/routes';
import Issuer from 'pages/issuer/Issuer';
import VcTypeDetail from 'pages/vc type detail/VcTypeDetail';

const Router = () => {
	return (
		<Switch>
			<Route exact path={routes.ROOT} component={Issuer} />
			<Route exact path={routes.VC_TYPE_DETAIL} component={VcTypeDetail} />
		</Switch>
	);
};

export default Router;
