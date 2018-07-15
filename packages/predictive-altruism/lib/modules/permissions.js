import Users from 'meteor/vulcan:users';


const membersActions = [
  // questions
  'questions.new',
  'questions.edit.own',
  'questions.remove.own',
  // predictions
  'predictions.new',
  'predictions.edit.own',
  'predictions.remove.own',
];
Users.groups.members.can(membersActions);
