/*

The main Questions collection definition file.

*/

import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';

let Questions;

Questions = createCollection({

  collectionName: 'Questions',

  typeName: 'Question',

  schema,

  resolvers: getDefaultResolvers('Questions'), // Uncomment on #Step9

  mutations: getDefaultMutations('Questions'), // Uncomment on #Step14

});

export default Questions;
