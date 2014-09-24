
var React = require('react'),
    moment = require('moment'),
    lorem = require('lorem-ipsum');

var Comment = React.createClass({

    render: function() {
        return (
            <div className="media">
                <a className="pull-left" href="#">
                    <img className="media-object" data-src="holder.js/64x64"/>
                </a>
                <div className="media-body">
                    <h4 className="media-heading">So-and-so commented at {moment().format('LL')}</h4>
                    <div className="media">
                        {lorem()}
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Comment;
