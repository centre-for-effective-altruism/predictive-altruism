
import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';

// Uncomment contents on #Step13:
const LoginForm = ({ currentUser }) => (
  <div className="login-form">
    {currentUser && <p>Welcome, {currentUser.displayName} {currentUser.isAdmin && `(admin)`}</p>}
    <Components.AccountsLoginForm redirect={false} />
  </div>
);

registerComponent('LoginForm', LoginForm, withCurrentUser);
