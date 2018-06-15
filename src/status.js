
 export function getStatus() {

    var status = "";
    var today = new Date();
    var lastUpdate = "";  /* get from updates.js */

    if (lastUpdate === today) {
      status = "have";
    } else { status = "have not";}
    return (status);
  
  }
