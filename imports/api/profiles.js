import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema'

export const Profiles = new Mongo.Collection('profiles');

if (Meteor.isServer){
    Meteor.publish('profiles', function() {

    });
}

Meteor.methods({
    'profiles.insert' () {
        if (!this.userId) {
            throw new Meteor.Error('unauthorized user');
        }

        return Profiles.insert({
            _id: this.userId,
            createdAt: moment.valueOf(),
            updatedAt: moment.valueOf(),
            role: 'user',
            email:  this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            city: undefined,
            state: undefined,
            phone: undefined,
            gender: undefined,
            image: undefined
        });
    },
    'profiles.update' (_id, updates) {
        if (!this.userId){
            throw new Meteor.Error('unauthorized user');
        }
        new SimpleSchema({
            _id:  {
                type: String,
                min: 1
            },
            updatedAt: moment.valueOf(),
            role:  {
                type:  String,
                optional:  true
            },
            email:  {
                type:  String,
                optional:  true
            },
            firstName: {
                type:  String,
                optional:  true
            },
            lastName:  {
                type:  String,
                otional:  true
            },
            city:  {
                type:  String,
                optional:  true
            },
            state:  {
                type:  String,
                optional:  true
            },
            phone:  {
                type:  String,
                optional:  true
            },
            gender:  {
                type:  String,
                optional:  true
            },
            image:  {
                type:  String,
                optional:  true
            }
        });

        Profiles.update({
            _id}, {
                $set: {
                    updatedAt: moment.valueOf(),
                    ...updates
                }
        });
    }
});