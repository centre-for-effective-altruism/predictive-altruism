import React from 'react';
import { Components, registerComponent, withList } from 'meteor/vulcan:core';

import Questions from '../../modules/collections/questions';

const QuestionsList = ({ loading, results }) => (
  <div className="questions-list">
    {loading ?
      <Components.Loading/> :
      results && <ul>
        {results.map(movie =>
          <li key={movie._id}>
            <h4>{movie.title}</h4>
            {movie.description && <p>{movie.description}</p>}
            {movie.creator && <p><em>– {movie.creator.displayName}</em></p>}
          </li>
        )}
      </ul>
    }
  </div>
);

const options = {
  collection: Questions,
  fragmentName: 'QuestionFragment', // uncomment on #Step11
};

registerComponent('QuestionsList', QuestionsList,  [withList, options] ); // uncomment on #Step10
