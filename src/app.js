import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LandingPage from './Containers/LandingPage'

export default function App() {
    return(
        <Router>
            <Switch>
                <Route path='/' component={LandingPage} exact/>
            </Switch>
        </Router>
    )
};
