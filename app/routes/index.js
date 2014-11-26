import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { name: 'twitter', logo: 'twitter' },
      { name: 'facebook', logo: 'facebook' },
      { name: 'github', logo: 'github' },
      { name: 'instagram', logo: 'instagram'},
      { name: 'pinterest', logo: 'pinterest' },
      { name: 'flickr', logo: 'flickr' },
      { name: 'linkedin', logo: 'linkedin' },
      { name: 'youtube', logo: 'youtube' },
      { name: 'vimeo', logo: 'vimeo-square' },
      { name: 'foursquare', logo: 'foursquare' },
      { name: 'reddit', logo: 'reddit' },
      { name: 'tumblr', logo: 'tumblr' },
    ];
  }
});
