import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import index from './index.css'

import UserResult from './UserResult';
import LoginInOutContainer from './containers';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginInOutContainer} />
      <Route path="/userresult" component={UserResult} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));

