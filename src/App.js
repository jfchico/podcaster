import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import { MainViewPageContainer, PodcastDetailPageContainer } from './pages';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MainViewPageContainer} />
        <Route path="/podcast/:podcastId" component={PodcastDetailPageContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
