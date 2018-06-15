
var today2 = new Date();
var monthNum = 1+today2.getMonth();
var dayNum = today2.getDate();
var yearNum = 1900+today2.getYear();
var month = monthNum.toString();
var day = dayNum.toString();
var year = yearNum.toString();
today2 = month+"/"+day+"/"+year;
today2 = today2.toString();
export default today2;



