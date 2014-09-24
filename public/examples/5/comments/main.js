
var React = require('react'),
    $ = require('jquery'),
    CommentsList = require('./CommentsList.jsx');

require('bootstrap/dist/css/bootstrap.css');

$(function() {
    React.renderComponent(CommentsList(), $('#react')[0]);
})
