

import matrix from './matrix.js';
import accounts from './ebayAccounts.js';
import products from './ebayProducts.js'; 
import today2 from './today.js';
import { getRandomInt } from './getRandom.js'
import React, { Component } from 'react';

class GetData extends Component {
 constructor() {
   super();
   this.state = {products}
 }
render() {

// INITIALIZE NEEDED CONSTANTS & VARIABLES
    const numAccts = accounts.length; 
    const numProds = products.length;  
    var unwatchArr = [];
    var watchArr = [];
    var randProd = "";
    var randAcct = "";
    var testAcct = "";

// GET THREE RANDOM PRODUCTS TO UN-WATCH

//for (var i = 0; i < 10; i++) {
 
    randProd = getRandomInt(numProds);
    randAcct = getRandomInt(numAccts);  
    testAcct = matrix[randAcct][randProd];  
    
     // IF lastUpdate < today...
        // THEN add it to unwatchUs array, ELSE get next random pair testAcct < today2
   
  //  if(1 == 1){
 //  testAcct = "Hoser";
   // watchArr.push(<ObjectRow key={i} />);        
    // alert(i);
 //   };
//}
return (
    <div className="getData">
    {testAcct}</div>
    );

}

 
        // REPEAT ONLY IF THERE ARE NOT 3 ITEMS IN THE ARRAY
//   };

// GET 3 RANDOM PRODUCTS TO WATCH

    // TRY 10 TIMES TO FIND A QUALIFYING RANDOM USER-PRODUCT PAIR

        // IF lastUpdate < today...

        // THEN add it to watchUs array, ELSE get next random pair

        // REPEAT ONLY IF THERE ARE NOT 3 ITEMS IN THE ARRAY

}
 
 export default GetData;


