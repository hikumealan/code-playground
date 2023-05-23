/* eslint-disable max-lines-per-function */
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'components/scrollToTop/scrollToTop';
import { BannerContainer } from '@nexus-ui-starter-kit/core/containers';
import { Logout } from '@nexus-ui-starter-kit/core/components';
import Home from '../views/home/home';
import AccountSummary from '../views/account/accountSummary';

import { AuthContainer, UnauthContainer } from '../containers';
import Examples from '../views/examples/examples';
import SignUp from '../views/signUp/signUp';
import Test from '../views/test/test';
import NotFound from '../views/notFound/notFound';

// Important rule to remember:
// Immediate Switch children can only be one of: Route or Redirect
const Routes = () => (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route
                path="/examples"
                exact
                component={() => (
                    <AuthContainer>
                        <Examples />
                    </AuthContainer>
                )}
            />
            <Route
                path="/examples/account"
                exact
                component={() => (
                    <AuthContainer>
                        <AccountSummary />
                    </AuthContainer>
                )}
            />
            <Route
                path="/examples/signup"
                exact
                component={() => (
                    <BannerContainer>
                        <SignUp />
                    </BannerContainer>
                )}
            />
            <Route
                path="/test"
                exact
                component={() => (
                    <AuthContainer>
                        <Test />
                    </AuthContainer>
                )}
            />
            <Route
                path="/dashboard"
                exact
                component={() => (
                    <AuthContainer>
                        <Home />
                    </AuthContainer>
                )}
            />
            <Route path="/logout" exact component={() => <Logout />} />
            <Redirect path="/" exact to="/dashboard" />
            <Route
                path="/"
                component={() => (
                    <UnauthContainer>
                        <NotFound />
                    </UnauthContainer>
                )}
            />
        </Switch>
    </Router>
);

export default Routes;
