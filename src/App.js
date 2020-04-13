import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import basename from './routes/basename';
import history from './routes/createBrowserHis';
import { Routes } from './routes/routes';

import 'typeface-roboto';

class App extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <div>Error</div>
    ) : (
      <div className="Grid-App">
        <Router basename={process.env.PUBLIC_URL || basename} history={history}>
          <Switch>
            {Routes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
