/** @jsx React.DOM */

var React = require('react');

var FeedItem = module.exports = React.createClass({
  render : function() {
    return (
      <li className='list-group-item'>
        <span className='badge badge-success pull-right'>{this.props.voteCount}</span>
        <h4> {this.props.title} </h4>
        <span> {this.props.desc} </span>
        <span className='pull-right'>
          <button id='up' className='btn btn-sm btn-primary'> &uarr;</button>
          <button id='down' className='btn btn-sm btn-primary'> &darr;</button>
        </span>
      </li>
    );
  }
});
