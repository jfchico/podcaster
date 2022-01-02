import * as React from 'react';

import './podcastFilter.scss';

export const PodcastFilter = props => {
  return (
    <div className="podcast-filter">
      <span className="number-of-podcasts">{props.numberOfPodcasts}</span>
      <input className="input-filter" onChange={(e) => props.filterPodcasts(e.target.value)}></input>
    </div>
  );
}
