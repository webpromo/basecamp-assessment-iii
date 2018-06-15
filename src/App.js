


import React, { Component } from 'react';
import './App.css';
import { getStatus } from './status.js'
import Labels from './DataLabels.js';
// import GetData from './getData.js';
// import ThreeLinks from './threeLinks.js';
// import Links from './Kiss.js';
// import randAcct from './randAcct.js';
import {TaskRow1, TaskRow2, TaskRow3, TaskRow4,TaskRow5, TaskRow6} from './functions.js';

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

          {TaskRow1()}
          {TaskRow2()}
          {TaskRow3()}

        </div>

        {/*  Watch table */}

        <div class="taskHeader">
          <h3>Watchlist these products:</h3>


          {Labels()}


          {/*  //////      taskRows */}

          {TaskRow4()}
          {TaskRow5()}
          {TaskRow6()}

        </div> {/* end of taskHeader */}

      </div>
    );
  }
}

export default App;