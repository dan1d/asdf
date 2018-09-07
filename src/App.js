import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tweets from './components/tweets';
import Photos from './components/photos';
import Tourdates from './components/tourdates';

import { Provider } from 'react-redux'
import { configureStore } from './redux'
import {Carousel} from '3d-react-carousal';

const store = configureStore()

class App extends Component {
  render() {
    const slides = [<Tweets key="tweets"/>, <Photos key="photos" />, <Tourdates key="tourdates" />];
    return (
      <Provider store={store}>
        <div className="App App-bg">
          <div>
            <Carousel slides={slides}/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
