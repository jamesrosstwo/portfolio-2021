import React from 'react';
import { Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import {Projects} from 'containers/Projects';


const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default (
  <Route path="/" component={App} history={appHistory}>
    <IndexRoute component={Home} history={appHistory} />
    <Route path="projects" history={appHistory} component={Projects} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
