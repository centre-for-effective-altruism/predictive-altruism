import { addRoute } from 'meteor/vulcan:core';

// Home
addRoute({ name: 'login', path: '/', componentName: 'LoginForm' });

// Questions
addRoute({ name: 'questionsHome', path: '/questions', componentName: 'QuestionsHome' });
addRoute({ name: 'questionSingle', path: '/questions/:questionId', componentName: 'QuestionSingle' });
