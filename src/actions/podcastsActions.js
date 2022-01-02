import axios from 'axios';

import {POPULAR_PODCASTS_URL} from './api.endpoints';
import { FETCH_PODCASTS_POUPLAR_LIST, FETCHING_IN_PROCESS } from './actionsTypes';
import { POPULAR_PODCASTS_STORED } from '../constants'

export const fetchPouplarPodcasts = () => {
  return dispatch => {

    const storedValue = window.localStorage.getItem(POPULAR_PODCASTS_STORED);
    if (storedValue && !hasADayPassed(JSON.parse(storedValue).timestamp)) {
      fetchPouplarPodcastsCompleted(dispatch, JSON.parse(storedValue).data);
    } else {
      dispatch({ type: FETCHING_IN_PROCESS });
      
      axios.get(POPULAR_PODCASTS_URL).then(
        res => { 
          const data = res.data.feed.entry;
          
          const storingValue = {
            data: data,
            timestamp: Date.now(),
          };

          window.localStorage.setItem(POPULAR_PODCASTS_STORED, JSON.stringify(storingValue))
          fetchPouplarPodcastsCompleted(dispatch, data);
      });
    }
  }
};

const fetchPouplarPodcastsCompleted = (dispatch, data)  => {
  dispatch (
    {
      type: FETCH_PODCASTS_POUPLAR_LIST,
      payload: data,
    }
  );
}

const hasADayPassed = timestamp => {
  const dateNow = Date.now()
  const timeDiff = dateNow - timestamp;
  return timeDiff / 3600 / 24 > 1;
}
