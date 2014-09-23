
var salutation = require('./salutations');

function greet(who) {
    alert(salutation + ", " + who);
}

module.exports = greet;
