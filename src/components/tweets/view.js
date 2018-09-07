import React, { Component } from 'react';
import Tweet from '../tweet/';

class Tweets extends Component {

  componentWillMount() {
    this.props.fetchTweets();
  }

  render() {
    const { tweets } = this.props;
    let arrays = [], size = 4;

    while (tweets.length > 0)
        arrays.push(tweets.splice(0, size));
    return arrays.map(array => { 
      return <div className="row">
          {array.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)}
        </div>
      })
  }
}

export default Tweets;
