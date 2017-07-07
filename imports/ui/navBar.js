import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

export const onSideBarChange = () => {
    console.log(Session.get('isFindFun'));
    Session.set('isFindFun', !Session.get('isFindFun'));
}

const NavBar = () => {
    const buttonLabel = Session.get('isFindFun');
    console.log('Label' + buttonLabel);
    return (
        <div>
            <button onClick={onSideBarChange}>
                {Session.get('isFindFun') ? 'Loyalty Cards' : 'Find Fun'}
            </button>
            {Session.get('isAdmin') ? <button >Admin Area</button> : undefined}
        </div>
    )
};

NavBar.propTypes = {
    onSideBarChange: PropTypes.func
};

export default NavBar