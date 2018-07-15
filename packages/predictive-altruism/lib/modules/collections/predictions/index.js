/*

The main Predictions collection definition file.

*/

import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';

let Predictions;

Predictions = createCollection({

  collectionName: 'Predictions',

  typeName: 'Prediction',

  schema,

  resolvers: getDefaultResolvers('Predictions'), // Uncomment on #Step9

  mutations: getDefaultMutations('Predictions'), // Uncomment on #Step14

});

export default Predictions;
