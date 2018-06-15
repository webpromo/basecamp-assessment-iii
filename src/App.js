


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import { getStatus } from './status.js'
import Labels from './DataLabels.js';
import throwMe from './getData.js';

// watchApp
class App extends Component {
  render() {
    return (

      <div id="parent">

        <div>
          <h1>
            These eBay tasks <u>{getStatus()}</u> been performed today.
    </h1>
        </div>

        {/* // un-watch table */}

        <div class="taskHeader">
          <h3>Un-Watchlist these products:</h3>

          {Labels()}


          {/*  //////      taskRows */}

          <div class="taskRow">
            <span class="shareRow2"><div>|{throwMe}|</div></span>
            <span class="shareRow3">ProductLink</span>
          </div>
        </div>

        {/*  Watch table */}

        <div class="taskHeader">
          <h3>Watchlist these products:</h3>


          {Labels()}


          {/*  //////      taskRows */}

          <div class="taskRow">
            <span class="shareRow2">AccountLink</span>
            <span class="shareRow3">ProductLink</span>
          </div>

        </div> {/* end of taskHeader */}

      </div>
    );
  }
}

export default App;