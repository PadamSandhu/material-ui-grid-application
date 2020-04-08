import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { AppGrid } from './components/grid';

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
        <BrowserRouter>
          <Route path="/" component={AppGrid} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
