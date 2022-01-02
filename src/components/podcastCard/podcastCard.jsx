import * as React from 'react';

import './podcastCard.scss';


export const PodcastCard = props => {
  return (
    <div className="podcast-card">
      <div className="card-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="podcast-author">
        <span className="podcast-name">{props.name}</span>
        <span className="podcast-author">{`Author: ${props.author}`}</span>
      </div>
    </div>
  );
}
