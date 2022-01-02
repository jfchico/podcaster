import { connect } from 'react-redux';
import { fetchPouplarPodcasts } from '../../actions';
import { MainViewPage} from './mainViewPage';

export const mapStateToPropsMainViewPage = state => ({
  fetchingData: state.podcastsReducer.fetchingData,
  popularPodcasts: state.podcastsReducer.pouplarPodcastsList,
})

export const mapDispatchToPropsMainViewPage = dispatch => {
  const res = {
    fetchPopularPodcasts: () => {
      dispatch(fetchPouplarPodcasts());
    },
  };

  return res;
};

export const MainViewPageContainer = connect(mapStateToPropsMainViewPage, mapDispatchToPropsMainViewPage)(MainViewPage);
