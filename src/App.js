import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store.js'
//import {createStore, applyMiddleware} from 'redux'


import Posts from './components/Posts.js'
import Postform from './components/Postform.js'


class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Postform/>
            <Posts/>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
