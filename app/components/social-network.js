import Ember from 'ember';

export default Ember.Component.extend({
  status: '',
  name: '',
  classNames: ['social-network'],
  classNameBindings: ['available'],

  baseUrl: function() {
    return this.get('name') + '.com/';
  }.property('name'),
});

