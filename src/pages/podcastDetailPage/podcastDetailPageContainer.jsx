import { connect } from 'react-redux';
import { PodcastDetailPage } from './podcastDetailPage';
import { fetchPodcastDetail } from '../../actions';

export const mapStateToPropsPodcastDetailPage = state => ({
  fetchingData: state.podcastsReducer.fetchingData,
  podcastDetail: state.podcastsReducer.podcastDetail,
});

export const mapDispatchToPropsPodcastDetailPage = dispatch => {
  return {
    fetchPodcastDetail: podcastId => {
      dispatch(fetchPodcastDetail(podcastId));
    },
  };
};

export const PodcastDetailPageContainer = connect(mapStateToPropsPodcastDetailPage, mapDispatchToPropsPodcastDetailPage)(PodcastDetailPage);
