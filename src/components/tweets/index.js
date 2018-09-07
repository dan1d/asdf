import { connect } from 'react-redux';
import TweetsPanel from './view';
import { doFetchTweets } from '../../redux/actions/tweets.actions';

const select = (state, props) => ({
  tweets: state.tweetsStore.tweets,
});

const perform = dispatch => ({
  fetchTweets: () => dispatch(doFetchTweets())
});

export default connect(
  select,
  perform
)(TweetsPanel);
