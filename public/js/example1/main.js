
var greet = require('./greet');

document.getElementById('greet').onclick = function() {
    var who = document.getElementById('who').value;
    greet(who);
};

