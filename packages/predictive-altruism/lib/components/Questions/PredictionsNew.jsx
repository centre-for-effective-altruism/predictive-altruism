import React, {Component} from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Components, registerComponent, withNew } from 'meteor/vulcan:core';
import Predictions from '../../modules/collections/predictions'

class PredictionsNew extends Component {

  constructor (props) {
    super(props)
    this.state = {
      confidence: ''
    }
  }

  handleSubmit = (event) => {
    const {newMutation, questionId} = this.props
    const {confidence} = this.state
    event.preventDefault()
    // build the document
    const document = {
      questionId,
      confidence,
    }
    // run the mutation
    return newMutation({
      document
    })
    .catch(err => console.error(err.graphQLErrors))
  }

  handleConfidenceChange = (event) => this.setState({confidence: event.target.value})

  render () {
  return <div>
    <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        <FormControl value={this.state.confidence} onChange={this.handleConfidenceChange} />
      </FormGroup>
      <FormGroup>
        <Button type='submit'>Make prediction!</Button>
      </FormGroup>
    </Form>
  </div>
  }
}

const options = {
  collection: Predictions,
  fragmentName: 'PredictionFragment',
};

registerComponent('PredictionsNew', PredictionsNew, [withNew, options]);
