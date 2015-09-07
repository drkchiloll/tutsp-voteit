/** @jsx React.DOM */

var React = require('react'),
    FeedItem = require('./FeedItem');

var FeedList = module.exports = React.createClass({
  render : function() {
    //Key is no longer available as a "prop" of this.props
    var feedItems = this.props.items.map(function(item) {
      return (
        <FeedItem
          keykey={item.key}
          title={item.title}
          desc={item.description}
          voteCount={item.voteCount}
          onVote={this.props.onVote}/>
      );
    }.bind(this));
    // console.log(feedItems);
    return (
      <ul className='list-group'>
        {feedItems}
      </ul>
    );
  }
});
