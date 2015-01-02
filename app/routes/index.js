import Ember from 'ember';

export default Ember.Route.extend({
  networks: [
    { id: 1, name: 'twitter', logo: 'twitter' },
    { id: 2, name: 'facebook', logo: 'facebook' },
    { id: 3, name: 'github', logo: 'github' },
    { id: 4, name: 'instagram', logo: 'instagram'},
    { id: 5, name: 'pinterest', logo: 'pinterest' },
    { id: 6, name: 'flickr', logo: 'flickr' },
    { id: 7, name: 'linkedin', logo: 'linkedin' },
    { id: 8, name: 'youtube', logo: 'youtube' },
    { id: 9, name: 'vimeo', logo: 'vimeo-square' },
    { id: 10, name: 'foursquare', logo: 'foursquare' },
    { id: 11, name: 'reddit', logo: 'reddit' },
    { id: 12, name: 'tumblr', logo: 'tumblr' }
  ],

  model: function() {
    var store = this.store;
    this.networks.forEach(function(network) {
      store.push('social-network', network);
    });
    return store.all('social-network');
  },

  actions: {
    checkHandle: function() {
      this.store.all('social-network').forEach(function(model){
        if (Math.random() > 0.5) {
          model.set('status',  'available');
        } else {
          model.set('status', 'unavailable');
        }
      });
    }
  }
});
