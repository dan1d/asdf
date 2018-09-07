import * as ACTIONS from '../constants';
import tweetsData from './static_responses/tweets';

export function doFetchTweets() {
  return (dispatch, getState) => {
    dispatch({type: ACTIONS.FETCHING_TWITS_START});
    // fetch("https://a.sfdcstatic.com/etl-node_df18twtest_tweetter.json").then(res => res.json())
    // .then(data => dispatch(success(data))).catch(err => dispatch(error(err)));
    dispatch(success(tweetsData));
  };

  function success(data) {
    return { type: ACTIONS.FETCHING_TWITS_SUCCESS, payload: data.tweets.slice(0, 20) };
  }

  function error(err) {
    return { type: ACTIONS.FETCHING_TWITS_ERROR, payload: err };
  }
}
