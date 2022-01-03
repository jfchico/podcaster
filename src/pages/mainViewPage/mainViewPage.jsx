import * as React from 'react';
import { useHistory } from "react-router-dom";
import { PodcastCard, HeaderComponent } from '../../components';
import { PODCAST_NAME, PODCAST_AUTHOR, PODCAST_IMAGE, PODCAST_ID, PODCAST_ID_IMID, PODCAST_DETAIL_PAGE_URI } from '../../constants';

import './mainViewPage.scss';
import { PodcastFilter } from '../../components/podcastFilter';


export const MainViewPage = props => {
  const history = useHistory();
  const [filteredPodcasts, setFilteredPodcasts] = React.useState([]);

  React.useEffect(() => {
    if (props.fetchPopularPodcasts) {
      props.fetchPopularPodcasts();
    }
  }, []);

  React.useEffect(() => {
    setFilteredPodcasts(props.popularPodcasts);
  }, [props.popularPodcasts]);

  const filterPodcasts = filter => {
    const filterLower = filter.toLowerCase();
    if (filterLower !== '') {
      setFilteredPodcasts(filteredPodcasts.filter(podcast => 
        podcast[PODCAST_NAME].label.toLowerCase().includes(filterLower) 
          || podcast[PODCAST_AUTHOR].label.toLowerCase().includes(filterLower)
      ));
    } else {
      setFilteredPodcasts(props.popularPodcasts);
    }
  };

  return (
    <div className="main-page-container">
      <HeaderComponent fetchingData={props.fetchingData} />
      <div className="filter-container">
        <PodcastFilter numberOfPodcasts={filteredPodcasts ? filteredPodcasts.length : 0} filterPodcasts={filterPodcasts} />
      </div>
      <div className="popular-podcasts-list-container">
        {filteredPodcasts && filteredPodcasts.map(podcast => 
          <PodcastCard 
            key={podcast[PODCAST_NAME].label}
            name={podcast[PODCAST_NAME].label} 
            author={podcast[PODCAST_AUTHOR].label}
            image={podcast[PODCAST_IMAGE][0].label}
            onClick={() => history.push(PODCAST_DETAIL_PAGE_URI(podcast[PODCAST_ID].attributes[PODCAST_ID_IMID]))}
          />
        )}
      </div>
    </div>
  );
}
