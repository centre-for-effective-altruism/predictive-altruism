import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment PredictionFragment on Prediction {
    _id
    createdAt
    userId
    creator{
      displayName
    }
    confidence
    questionId
  }
`);
