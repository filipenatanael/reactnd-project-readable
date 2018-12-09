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
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
