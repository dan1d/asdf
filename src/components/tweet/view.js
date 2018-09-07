import React, { Component } from 'react';

class Tweet extends Component {

  render() {
    const { tweet } = this.props;
    return (
      <div>
        <header>
          <h4>{tweet.author.handle}</h4>
          <img src={tweet.author.image} />
        </header>
        <div>
          {tweet.author.body}
        </div>
      </div>
    );
  }
}

export default Tweet;
