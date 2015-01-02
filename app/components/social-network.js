import Ember from 'ember';

export default Ember.Component.extend({
  status: '',
  handle: '',
  name: '',
  available: '',
  classNames: ['social-network'],

  baseUrl: function() {
    return this.get('name') + '.com/';
  }.property('name'),

  faviconUrl: function() {
    return this.get('favicon') || this.get('defaultFavicon');
  }.property('favicon', 'defaultFavicon'),

  defaultFavicon: function() {
    return 'https://' + this.get('baseUrl') + 'favicon.ico';
  }.property('baseUrl'),
});

