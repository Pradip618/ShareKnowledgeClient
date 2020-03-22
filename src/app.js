import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ConfigureStore';

import LandingPage from './Containers/LandingPage';
import CreateArticle from './Containers/CreateArticlePage/index.tsx';
import ErrorPage from './ErrorPage';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/write-article" component={CreateArticle} exact />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Provider>
  );
}
