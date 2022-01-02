import { FETCH_PODCASTS_POUPLAR_LIST, FETCHING_IN_PROCESS } from '../actions';

const initialState = {
  fetchingData: false,
  pouplarPodcastsList: null,
};

export const podcastsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PODCASTS_POUPLAR_LIST:
      return {
        ...state,
        fetchingData: false,
        pouplarPodcastsList: action.payload.feed.entry,
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