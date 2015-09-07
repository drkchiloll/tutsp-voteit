/** @jsx React.DOM */

var React = require('react');

var FeedItem = module.exports = React.createClass({
  vote : function(newCount) {
    // console.log(this.props.title);
    this.props.onVote({
      key : this.props.keykey,
      title : this.props.title,
      description : this.props.desc,
      voteCount : newCount
    });
  },
  voteUp : function() {
    var count = parseInt(this.props.voteCount,10);
    var newCount = count + 1;
    this.vote(newCount);
  },
  voteDown : function() {
    var count = parseInt(this.props.voteCount,10);
    var newCount = count - 1;
    this.vote(newCount);
  },
  //Notice the key from props is renamed to keykey
  render : function() {
    return (
      <li key={this.props.keykey} className='list-group-item'>
        <span className='badge badge-success pull-right'>{this.props.voteCount}</span>
        <h4> {this.props.title} </h4>
        <span> {this.props.desc} </span>
        <span className='pull-right'>
          <button id='up' className='btn btn-sm btn-primary' onClick={this.voteUp}> &uarr;</button>
          <button id='down' className='btn btn-sm btn-primary' onClick={this.voteDown}> &darr;</button>
        </span>
      </li>
    );
  }
});
