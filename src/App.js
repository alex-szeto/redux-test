import React from 'react';
import './App.css';
import {Provider} from 'react-redux'

import Posts from './components/Posts.js'
import Postform from './components/Postform.js'

function App() {
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

export default App;
