import * as React from 'react';
import { HeaderComponent } from '../../components';
import { DetailsCard } from '../../components/detailsCard';

import './podcastDetailPage.scss';


export const PodcastDetailPage = props => {
  React.useEffect(() => {
    props.fetchPodcastDetail(props.match.params.podcastId);
  }, []);

  return (
    <div className="main-page-container">
      <HeaderComponent fetchingData={props.fetchingData} />
      {props.podcastDetail && !props.fetchingData &&
        <div className="podcast-detail-container">
            <DetailsCard 
              name={props.podcastDetail.trackName} 
              author={props.podcastDetail.artistName}
              image={props.podcastDetail.artworkUrl100}
              description={''}
            />
          <div className="counter-episodes-container">
            <div className="counter-container shadowed-box">
              <span>{`Episodes: ${props.podcastDetail.trackCount}`}</span>
            </div>
            <div className="episodes-container shadowed-box">
              <span>I am the episodes list</span>
            </div>
        </div>
      </div>
      }
    </div>
  );
}
