import { addRoute } from 'meteor/vulcan:core';

addRoute({ name: 'market-home', path: '/', componentName: 'MoviesApp' });
addRoute({ name: 'question', path: '/questions/:questionId', componentName: 'QuestionSingle' });
