import { FETCH_PODCASTS_POUPLAR_LIST, FETCHING_IN_PROCESS, FETCH_PODCAST_DETAIL } from '../actions';

const initialState = {
  fetchingData: false,
  pouplarPodcastsList: null,
  podcastDetail: null,
};

export const podcastsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PODCASTS_POUPLAR_LIST:
      return {
        ...state,
        fetchingData: false,
        pouplarPodcastsList: action.payload,
      };
    case FETCH_PODCAST_DETAIL:
      return {
        ...state,
        fetchingData: false,
        podcastDetail: action.payload,
      };
    case FETCHING_IN_PROCESS:
      return {
        ...state,
        fetchingData: true,
      };
    default:
      return state
  }
};