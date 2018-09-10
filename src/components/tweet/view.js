import React, { Component } from 'react';

class Tweet extends Component {

  
  
  render() {
    const { tweet } = this.props;
    const createMarkup = () => { return {__html: tweet.body } }
    return (
      <div className="row tweet">
        <header className="col-xs">
          <h4>{tweet.author.handle}</h4>
          <img src={tweet.author.image} />
        </header>
        <div dangerouslySetInnerHTML={createMarkup()} className="col-xs-9 middle" />
      </div>
    );
  }
}

export default Tweet;
