import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import { MainViewPageContainer } from './pages';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MainViewPageContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
