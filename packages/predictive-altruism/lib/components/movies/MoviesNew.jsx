import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

import Questions from '../../modules/collections/questions';

// uncomment children on #Step15:
const MoviesNew = () => (
  <div className="movies-new">
    <Components.SmartForm
      collection={Questions}
      mutationFragmentName="QuestionFragment"
      fields={['title', 'description', 'resolutionDate']} />
  </div>
);

registerComponent('MoviesNew', MoviesNew);
