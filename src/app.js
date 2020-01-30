import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LandingPage from './Containers/LandingPage'
import CreateArticle from './Containers/CreateArticlePage'
import ErrorPage from './ErrorPage'

export default function App() {
    return(
        <Router>
            <Switch>
                <Route path='/' component={LandingPage} exact/>
                <Route path='/write-article' component={CreateArticle} exact/>
                <Route component={ErrorPage}/>
            </Switch>
        </Router>
    )
};
