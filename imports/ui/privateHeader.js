import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

import NavBar from './navBar';

export const PrivateHeader = (props) => {
  const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg'
  return (
    <div className="header">
      <div className="header__content">
        <img className="header__nav-toggle" onClick={props.toggleNav} src={navImageSrc} />
        <img className="header__logo" src="/images/cucaFunLogo.png" alt="CucaFun Logo" />
        <h1 className="header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => props.handleLogout()}>Logout</button>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    handleLogout: () => Accounts.logout(),
    isNavOpen: Session.get('isNavOpen'),
    toggleNav: () => Session.set('isNavOpen', !Session.get('isNavOpen'))
  };
}, PrivateHeader);