/*

Seed the database with some dummy content. 

*/

import Users from 'meteor/vulcan:users';
import { newMutation } from 'meteor/vulcan:core';
import { Promise } from 'meteor/promise';

const seedData = [
];

const createUser = async (username, email) => {
  const user = {
    username,
    email,
    isDummy: true
  };
  return newMutation({
    collection: Users, 
    document: user,
    validate: false
  });
}

const createDummyUsers = async () => {

  // eslint-disable-next-line no-console
  console.log('// seeding users…');

  return Promise.all([
    createUser('Bruce', 'dummyuser1@telescopeapp.org'),
    createUser('Arnold', 'dummyuser2@telescopeapp.org'),
    createUser('Julia', 'dummyuser3@telescopeapp.org'),
  ]);
};
