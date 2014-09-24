
var React = require('react'),
    _ = require('lodash'),
    Comment = require('./Comment.jsx');

var CommentsList = React.createClass({

    render: function() {

        var comments = _.map(_.range(10), function(i) {
            return (
                <Comment key={i}/>
            );
        });

        return (
            <div className="container comments-list">
                <h1>This is the comments list page</h1>
                {comments}
            </div>
        );
    }

});

module.exports = CommentsList;
