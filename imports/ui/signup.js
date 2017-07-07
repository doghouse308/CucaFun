import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

import {Profiles} from '../api/profiles';

export  class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    let firstName = this.refs.firstName.value.trim();
    let lastName = this.refs.lastName.value.trim();

    if (password.length < 9) {
      return this.setState({ error: 'Password must be more than 8 characters long' });
    }
    this.props.createUser({ email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });
    this.props.createProfile({ email, firstName, lastName }, (err) => {
      if (err){
        this.setState({error:  err.reason});
      }  else {
        this.setState({error: ''});
      }
    });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="text" ref="firstName" name="firstName" placeholder=" First Name" value=""/>
            <input type="text" ref="lastName" name="lastName" placeholder=" Last Name" value=""/>
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input type="password" ref="password" name="password" placeholder="Password" />
            <button className="button">Create Account</button>
          </form>

          <Link to="/">Already have an account?</Link>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  createUser: PropTypes.func.isRequired,
  createProfile:  PropTypes.func.isRequired
};
export default createContainer(() => {
  return  {
    createUser: Accounts.createUser,
    createProfile: Meteor.call('profiles.insert')
  };
},  Signup) ;