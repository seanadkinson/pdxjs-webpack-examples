
var moment = require('moment');
function greet(who) {
    alert("Hello, " + who + ", it is: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}
module.exports = greet;
