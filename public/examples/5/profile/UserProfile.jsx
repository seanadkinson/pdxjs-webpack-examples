
var React = require('react'),
    profilePic = require('../../../img/profile.png');

var UserProfile = React.createClass({

    render: function() {
        return (
            <div className="container">
                <h1>User Profile Page</h1>
                <img src={profilePic}/>
            </div>
        );
    }

});

module.exports = UserProfile;
