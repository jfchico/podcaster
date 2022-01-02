import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { APP_TITLE } from '../../constants';
import { useHistory } from "react-router-dom";

import './headerComponent.scss';


export const HeaderComponent = props => {
  const history = useHistory();
  return (
    <div className="header-component">
      <span className="header-title" onClick={() => history.push('/')}>{APP_TITLE}</span>
      <span className={`fetching-indicator  ${props.fetchingData ? 'fetching': ''}`}>
        <FontAwesomeIcon icon={faCircle} />

      </span>
    </div>
  );
}
