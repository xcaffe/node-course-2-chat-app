var moment = require('moment');

//Jan 1st 1970 00:00:10 am

//var date = new Date();
//var months =['Jan', 'feb']
//console.log(date.getmonth());

//var date = moment();
//date.add(100, 'year').subtract(9, 'months');
//console.log(date.format('MMM Do, YYYY'));

//10:35 am 
//6:01 am

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))