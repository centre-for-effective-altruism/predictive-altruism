import React from 'react';
import { registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import { Link } from 'react-router';

import withQueryResolvers from '../../hocs/withQueryResolvers.js';
import withMutationResolvers from '../../hocs/withMutationResolvers.js';

const Nav = (props) => {

  return (
    <div className="nav">
      <ul>
        <li className="nav-item"><Link activeClassName="active" to="/" onlyActiveOnIndex={true}>Home</Link></li>
      </ul>
    </div>
  )
};

registerComponent('Nav', Nav, withQueryResolvers, withCurrentUser, withMutationResolvers);
