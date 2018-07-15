import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const QuestionsHome = () => (
  <div className="app-content">
    <div className="questions-home">
      <Components.QuestionsList/>
      {/*<Components.MoviesNew />*/}
    </div>
  </div>
);

registerComponent('QuestionsHome', QuestionsHome);
