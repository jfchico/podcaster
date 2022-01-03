import axios from 'axios';

import {POPULAR_PODCASTS_URL, PODCAST_DETAIL_URL} from './api.endpoints';
import { FETCH_PODCASTS_POUPLAR_LIST, FETCHING_IN_PROCESS, FETCH_PODCAST_DETAIL } from './actionsTypes';
import { POPULAR_PODCASTS_STORED, PODCAST_DETAIL_STORED } from '../constants'

export const fetchPouplarPodcasts = () => {
  return dispatch => {

    const storedValue = window.localStorage.getItem(POPULAR_PODCASTS_STORED);
    if (storedValue && !hasADayPassed(JSON.parse(storedValue).timestamp)) {
      fetchPouplarPodcastsCompleted(dispatch, JSON.parse(storedValue).data);
    } else {
      fetchDataStarted(dispatch);
      
      axios.get(POPULAR_PODCASTS_URL).then(
        res => { 
          const data = res.data.feed.entry;

          storeData(POPULAR_PODCASTS_STORED, data);
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

export const fetchPodcastDetail = podcastId => {
  return dispatch => {

    const storedValueName = `${PODCAST_DETAIL_STORED}_${podcastId}`;
    const storedValue = window.localStorage.getItem(storedValueName);
    if (storedValue && !hasADayPassed(JSON.parse(storedValue).timestamp)) {
      fetchPodcastDetailompleted(dispatch, JSON.parse(storedValue).data);
    } else {
      fetchDataStarted(dispatch);
      
      axios.get(PODCAST_DETAIL_URL(podcastId)).then(
        res => { 
          const data = JSON.parse(res.data.contents).results[0];

          storeData(storedValueName, data);
          fetchPodcastDetailompleted(dispatch, data);
      });
    }
  }
}

const fetchPodcastDetailompleted = (dispatch, data)  => {
  dispatch (
    {
      type: FETCH_PODCAST_DETAIL,
      payload: data,
    }
  );
}


// Actions helpers
const fetchDataStarted = dispatch => {
  dispatch({ type: FETCHING_IN_PROCESS });
}

const storeData = (storedDataName, storedDataValue) => {
  window.localStorage.setItem(storedDataName, JSON.stringify(mapDataToStore(storedDataValue)));
}

const mapDataToStore = data => {
  return {
    data: data,
    timestamp: Date.now(),
  }
}

const hasADayPassed = timestamp => {
  const dateNow = Date.now()
  const timeDiff = dateNow - timestamp;
  return timeDiff / 3600 / 24 > 1;
}
