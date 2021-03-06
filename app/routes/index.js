import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'social-network',

  networks: [
    { id: 1, name: 'twitter', logo: 'twitter' },
    { id: 2, name: 'facebook', logo: 'facebook' },
    { id: 3, name: 'github', logo: 'github' },
    { id: 4, name: 'instagram', logo: 'instagram'},
    { id: 5, name: 'medium', logo: 'medium', handlePrefix: '@' },
    { id: 6, name: 'dribbble', logo: 'dribbble' },
    { id: 7, name: 'pinterest', logo: 'pinterest' },
    { id: 8, name: 'youtube', logo: 'youtube', handlePrefix: 'user/' },
    { id: 9, name: 'vimeo', logo: 'vimeo-square' },
    { id: 10, name: 'foursquare', logo: 'foursquare' },
    { id: 11, name: 'reddit', logo: 'reddit', handlePrefix: 'u/' },
    { id: 12, name: 'tumblr', logo: 'tumblr', handlePrefix: 'blog/' }
  ],

  setupController: function(controller) {
    var store = this.store;
    this.networks.forEach(function(network) {
      store.push('social-network', network);
    });
    controller.set('model', store.all('social-network'));
  },
});
