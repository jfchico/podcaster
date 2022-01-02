import axios from 'axios';

import {POPULAR_PODCASTS_URL} from './api.endpoints';
import { FETCH_PODCASTS_POUPLAR_LIST, FETCHING_IN_PROCESS } from './actionsTypes';

export const fetchPouplarPodcasts = () => {
  return dispatch => {
    dispatch({ type: FETCHING_IN_PROCESS });

    axios.get(POPULAR_PODCASTS_URL).then(
      res => {
        dispatch (
          {
            type: FETCH_PODCASTS_POUPLAR_LIST,
            payload: res.data,
          }
        );
      }
    )
  };
};
