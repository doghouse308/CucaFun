import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

export const FindFunSidebar = () => {
    return (
        <div className="item-list">
            <input type="text" ref="zipCode" name="zipCode" placeholder="Zip Code" />
            <label for="distance">How far are you willing to travel?</label>
            <select ref="distance" name="distance" id="distance">
                <option value="any">Any</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
            </select>
            <label for="distanceType">Miles</label>
            <select ref="distanceType" name="distanceType" id="distanceType">
                <option value="miles">Miles</option>
                <option value="kilometers">Kilometers</option>
            </select>
            <button>Free Fun</button>
            <button>Fun Under $10</button>
            <button>Fun Under $25</button>
            <button>Fun Under $50</button>
            <button>Fun Under $100</button>
            <p>or select price range</p>
            <h5>Price per person</h5>
            <input type="number" ref="funMin" name="funMin" id="funMin" placeholder="minumum"/>
            <input type="number" ref="funMax" name="funMax" id="funMax" placeholder="maximun"/>
        </div>
    )
};