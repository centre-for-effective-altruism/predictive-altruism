import React from 'react';
import { Components, registerComponent, withList } from 'meteor/vulcan:core';
import {Link} from 'react-router'

import Questions from '../../modules/collections/questions';

const QuestionsList = ({ loading, results }) => (
  <div className="questions-list">
    <Components.QuestionsNew />
    {loading ?
      <Components.Loading/> :
      results && <ul>
        {results.map(movie =>
          <li key={movie._id}>
            <Link to={`/questions/${movie._id}`}><h4>{movie.title}</h4></Link>
            {movie.description && <p>{movie.description}</p>}
            {movie.creator && <p><em>– {movie.creator.displayName}</em></p>}
            <br />
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
