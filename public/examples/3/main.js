
var $ = require('jquery'),
    prettify = require('../../js/vendor/google-code-prettify/prettify'),
    greet = require('./greet');

require('../../js/vendor/google-code-prettify/prettify.css');
require('../../css/examples.css');

$(function() {
    $('#greet').click(function() {
        var who = $('#who').val();
        greet(who);
    });
    prettify.prettyPrint();
});

