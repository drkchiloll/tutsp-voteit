/** @jsx React.DOM */

var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList'),
    _ = require('lodash'),
    Firebase = require('firebase');

var Feed = module.exports = React.createClass({
  getInitialState : function() {
    return {
      items : [],
      formDisplayed : false
    };
  },
  loadData : function() {
    var ref = new Firebase('https://reactjs-voteit.firebaseio.com/feed');
    ref.on('value', function(snap) {
      var items = [];
      var sorted = [];
      snap.forEach(function(itemSnap) {
        var item = itemSnap.val();
        item.key = itemSnap.name();
        items.push(item);
      });

      sorted = _.sortBy(items, function(item) {
        return -item.voteCount;
      });

      this.setState({
        items : sorted
      });
    }.bind(this));
  },
  componentDidMount : function() {
    this.loadData();
  },
  onToggleForm : function() {
    this.setState({
      formDisplayed : !this.state.formDisplayed
    })
  },
  onNewItem : function(newItem) {
    var ref = new Firebase('https://reactjs-voteit.firebaseio.com/feed');
    ref.push(newItem);
  },
  onVote : function(item) {
    var ref = new Firebase('https://reactjs-voteit.firebaseio.com/feed').child(item.key);
    ref.update(item);
  },
  render : function() {
    return (
      <div>
        <div className='container'>
          <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm}/>
        </div>

        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem}/>

        <br/>
        <br/>
        <div className='container'>
          <FeedList items={this.state.items} onVote={this.onVote}/>
        </div>
      </div>
    );
  }
});
