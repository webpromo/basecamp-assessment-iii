
import React, { Component } from 'react';
import logo from './logo.svg';

class ThreeLinks extends Component {
 constructor() {
   super();

   this.state = {
     products: [
       { num: "283004647222", description: "Dive Rings" },
       { num: "283004675507", description: "White pony beads" },
       { num: "282977648739", description: "Paper Mache R" },
       { num: "282977665337", description: "Needlework Organizer" },
       { num: "282625266671", description: "Paper Mache E" },
       { num: "282623088986", description: "Dot embossing folder" },
       { num: "282627825565", description: "SBE20 black eyes" },
       { num: "283008837096", description: "Wedding guest book" },
       { num: "282625250413", description: "Designer Fur Deluxe" },
       { num: "283004647222", description: "Dive Rings" }
     ]
   }
 }
 render() {
   var productList = this.state.products.map((product, i) => {
     return (
       <span key={i}>{product.description}</span>
     )
   })

   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1>
       </header>
       {productList}
     </div>
   );
 }
}

export default ThreeLinks;