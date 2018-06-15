


import React, { Component } from 'react';

/* import $ from 'jquery'; */

import './App.css';
import accounts from './ebayAccounts.js';


class App extends Component {
  render() {
    return (



      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Links for Celeste</h1>
        </header>
        <section className="App-ebay">
         <h3><a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn" target="_blank">Login to eBay</a></h3>
         
        </section>
      </div>


    );
  }
}

export default App;

