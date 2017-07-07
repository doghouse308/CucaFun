import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';

import { routes, onAuthChange } from '../imports/routes/routes';
import { NavBar, onSideBarChange } from '../imports/ui/navBar';
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const currentPagePrivacy = Session.get('currentPagePrivacy');
  onAuthChange(isAuthenticated, currentPagePrivacy);
});

Tracker.autorun(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  Session.set('isNavOpen', false);

  if (selectedNoteId) {
    browserHistory.replace(`/dashboard/${selectedNoteId}`);
  }
});

Tracker.autorun(() => {
  const isNavOpen = Session.get('isNavOpen');

  document.body.classList.toggle('is-nav-open', isNavOpen);
});

Tracker.autorun(() => {
  const isFindFun = Session.get('isFindFun');
  // onSideBarChange();
});

Meteor.startup(() => {
  Session.set('selectedNoteId', undefined);
  Session.set('isNavOpen', false);
  Session.set('isFindFun', true);
  Session.set('isAdmin', true);
  Session.set('isAdminOpen', false);
  ReactDOM.render(routes, document.getElementById('app'));
});