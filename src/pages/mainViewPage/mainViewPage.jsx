import * as React from 'react';
import { HeaderComponent } from '../../components';
import { PodcastCard } from '../../components';

import './mainViewPage.scss';
import { PodcastFilter } from '../../components/podcastFilter';


export const MainViewPage = props => {
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
    console.log("filter", filter)
    if (filterLower !== '') {
      setFilteredPodcasts(filteredPodcasts.filter(podcast => 
        podcast['im:name'].label.toLowerCase().includes(filterLower) 
          || podcast['im:artist'].label.toLowerCase().includes(filterLower)
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
            name={podcast['im:name'].label} 
            author={podcast['im:artist'].label}
            image={podcast['im:image'][0].label}
          />
        )}
      </div>
    </div>
  );
}
