
import * as React from 'react';

import './detailsCard.scss';

const description = "Song Exploder is a podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made. Each episode features an artist discussing a song of theirs, breaking down the sounds and ideas that went into the writing and recording. Hosted and produced by Hrishikesh Hirway.";

export const DetailsCard = props => {
  return (
    <div className="podcast-details-card">
      <div className="card-image border-bottom">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="podcast-details-author border-bottom">
        <span className="podcast-details-name">{props.name}</span>
        <span className="podcast-details-author italic">{`by ${props.author}`}</span>
      </div>
      <div className="podcast-details-description">
        <span>Description:</span>
        <span className="description italic">{description}</span>
      </div>
    </div>
  );
}
