import React from 'react';
import { Components, registerComponent, withList } from 'meteor/vulcan:core';

import Predictions from '../../modules/collections/predictions';

const PredictionsList = ({ loading, results }) => (
  <div className="questions-list">
    {loading ?
      <Components.Loading/> :
      results && <ul>
        {results.map(prediction =>
          <li key={prediction._id}>
            {<p>{prediction.creator.displayName} - {prediction.confidence}%</p>}
          </li>
        )}
      </ul>
    }
  </div>
);

const options = {
  collection: Predictions,
  fragmentName: 'PredictionFragment',
};

registerComponent('PredictionsList', PredictionsList,  [withList, options] );
