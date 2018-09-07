import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tweets from './components/tweets';
import Photos from './components/photos';
import Tourdates from './components/tourdates';

import { Provider } from 'react-redux'
import { configureStore } from './redux'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App App-bg">
          <div className="row center-xs">
            <Tabs>
              <TabList className="row">
                <Tab className="col-xs">Tweets #Dreamforce</Tab>
                <Tab className="col-xs">Photos</Tab>
                <Tab className="col-xs">Tourdates</Tab>
              </TabList>

              <TabPanel className="box">
                <Tweets />
              </TabPanel>
              <TabPanel className="box">
                <Photos />
              </TabPanel>
              <TabPanel className="box">
                <Tourdates />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
