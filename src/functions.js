
import React, { Component } from 'react';

  
  function Dialog(props) {
    return (
        <div class="taskRow">
       <span className="shareRow2">
          <a href="http://ebay.com/" target="_blank">{props.user1}</a>
        </span>
        <span className="shareRow3">
          <a href={props.link1} target="_blank">{props.product1}</a>
        </span>
        </div>
    );
  }

  export function TaskRow1() {
    return (
      <Dialog
      user1="eaton@sociocrates.com"
      link1="https://www.ebay.com/itm/283004647222"
      product1 = "283004647222"  />
    );
  }
  export function TaskRow2() {
    return (
      <Dialog
      user1="cratemotornews@noozboy.com"
      link1="https://www.ebay.com/itm/283004675507"
      product1 = "283004675507"  />
    );
  }
  export function TaskRow3() {
    return (
      <Dialog
      user1="kal@reallycreepystories.com"
      link1="https://www.ebay.com/itm/282977648739"
      product1 = "282977648739"  />
    );
  }

 