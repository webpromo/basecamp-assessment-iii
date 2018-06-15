

import matrix from './matrix.js';
import accounts from './ebayAccounts.js'; // works
import products from './ebayProducts.js'; // can't access values
import { getRandomInt } from './getRandom.js'
// import React, { Component } from 'react';


// INITIALIZE NEEDED CONSTANTS & VARIABLES
const numAccts = accounts.length; // works
const numProds = products.length;  // WORKs!
var unwatchArr = [];
var watchArr = [];
var randProd = getRandomInt(numProds);
var randAcct = getRandomInt(numAccts);

// this variable is used to test the values of the variables above
                    
                var throwMe = products[1].num;

// GET THREE RANDOM PRODUCTS TO UN-WATCH

    // TRY 10 TIMES TO FIND A QUALIFYING RANDOM USER-PRODUCT PAIR
// for (tries = 1, tries < 10, tries++) {

    var testAcct = matrix[0][getRandomInt(numProds)];
export default throwMe;
        // IF lastUpdate < today...
    
        // THEN add it to unwatchUs array, ELSE get next random pair

        // REPEAT ONLY IF THERE ARE NOT 3 ITEMS IN THE ARRAY
 //   }

// GET 3 RANDOM PRODUCTS TO WATCH

    // TRY 10 TIMES TO FIND A QUALIFYING RANDOM USER-PRODUCT PAIR

        // IF lastUpdate < today...

        // THEN add it to watchUs array, ELSE get next random pair

        // REPEAT ONLY IF THERE ARE NOT 3 ITEMS IN THE ARRAY



