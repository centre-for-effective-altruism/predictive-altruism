import { Routes, Components, ComponentsTable, Collections, Strings } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

import schema from '../modules/schema.js';
import Movies from '../modules/collection.js';

const containsChild = (component, childName) => {
  return !!component && component().props.children && component().props.children.type.name === childName;
}

const checks = {

}

export default checks;
