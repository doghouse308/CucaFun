import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Sesion } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

 export const NoteListItem = (props) => {
     const className = props.note.selected ? 'item--selected' : 'item';
    return (
        <div className={className} onClick={() => {
            props.Session.set('selectedNoteId', props.note._id)
        }}>
            <h5 className="item__title">{props.note.title || 'Untitled Note' }</h5>
            <p className="item__subtitle">{ moment(props.note.updatedAt).format('M/DD/YY')}</p>
        </div>
    )
};

NoteListItem.proptypes = {
    note: PropTypes.object.isRequired,
    Session: PropTypes.object.isRequired 
};

export default createContainer(() =>{
    return { Session };
}, NoteListItem);