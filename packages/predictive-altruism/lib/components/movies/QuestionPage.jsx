import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Components, registerComponent, withDocument } from 'meteor/vulcan:core';
import Questions from '../../modules/collections/questions';
import Predictions from '../../modules/collections/predictions'

class QuestionPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showNewPredictionBox: false,
    }
  }

  render () {
    const {document, loading} = this.props
    const {showNewPredictionBox} = this.state
    if (loading) return <Components.Loading/>
    return (<div>
      <h4>{document.title}</h4>
      <p>{document.description}</p>
      <p>Posed by: {document.creator.displayName}</p>
      <p>Resolved on: {document.resolutionDate}</p>
      <Button
        bsStyle="primary"
        onClick={() => this.setState({showNewPredictionBox: true})}
      >
        Enter Prediction
      </Button>
      {showNewPredictionBox && <Components.SmartForm
        collection={Predictions}
      />}
    </div>);
  }
}

const options = {
  collection: Questions,
  fragmentName: 'QuestionFragment',
};

registerComponent('QuestionPage', QuestionPage, [withDocument, options]);
