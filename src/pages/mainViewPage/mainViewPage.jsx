import * as React from 'react';
import { HeaderComponent } from '../../components';
import { PodcastCard } from '../../components';

import './mainViewPage.scss';


export const MainViewPage = props => {

  React.useEffect(() => {
    if (props.fetchPopularPodcasts) {
      props.fetchPopularPodcasts();
    }
  }, []);

  return (
    <div className="main-page-container">
      <HeaderComponent fetchingData={props.fetchingData} />
      <div className="popular-podcasts-list-container">
        {props && props.popularPodcasts && props.popularPodcasts.map(podcast => 
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
