import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:category" exact component={props => <Main {...props} />} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
