
var React = require('react'),
    $ = require('jquery'),
    UserProfile = require('./UserProfile.jsx');

require('bootstrap/dist/css/bootstrap.css');

$(function() {
    React.renderComponent(UserProfile(), $('#react')[0]);
});
