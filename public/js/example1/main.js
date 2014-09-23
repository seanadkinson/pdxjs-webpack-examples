
var $ = require('jquery');
var greet = require('./greet');

$(function() {

    $('#greet').click(function() {
        var who = $('#who').val();
        greet(who);
    });

});


