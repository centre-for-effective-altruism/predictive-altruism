import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment QuestionFragment on Question {
    _id
    createdAt
    title
    description
    resolutionDate
    creator{
     displayName
    }
  }
`);
