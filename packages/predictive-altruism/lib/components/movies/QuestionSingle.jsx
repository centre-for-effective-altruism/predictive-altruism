import React from 'react';
import { Components, registerComponent, withDocument } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import Questions from '../../modules/collections/questions';

const QuestionSingle = ({params}) => <Components.QuestionPage documentId={params.questionId} />

registerComponent('QuestionSingle', QuestionSingle, withRouter);
