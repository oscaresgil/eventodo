import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
    username: attr('string'),
    first_name: attr('string'),
    last_name: attr('string'),
    password: attr('string'),

    events: hasMany('event',{async:true}),
    friends: hasMany('user',{async:false})
});
