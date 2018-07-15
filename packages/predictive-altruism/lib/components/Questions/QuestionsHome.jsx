import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const QuestionsHome = () => (
  <div className="app-content">
    <div className="questions-home">
      <h2>You can bet on shit</h2>
      <Components.QuestionsList />
      {/*<Components.MoviesNew />*/}
    </div>
  </div>
);

registerComponent('QuestionsHome', QuestionsHome);
