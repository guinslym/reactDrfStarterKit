import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import { LoginView, RegisterView, NotFoundView, HomeView} from './containers';
import requireAuthentication from './utils/requireAuthentication';
export default(
    <Route path="/" component={App}>
        <IndexRoute component={requireAuthentication(HomeView)}/>
        <Route path="login" component={LoginView}/>
        <Route path="register" component={RegisterView}/>
        <Route path="*" component={NotFoundView}/>
    </Route>
);
