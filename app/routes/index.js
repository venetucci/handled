import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { name: 'twitter' },
      { name: 'facebook' },
      { name: 'github' },
      { name: 'instagram',
        favicon: '//d36xtkk24g8jdx.cloudfront.net/bluebar/f0ebb28/images/ico/favicon.ico' },
      { name: 'pinterest' },
      { name: 'flickr' },
      { name: 'linkedin' },
      { name: 'youtube' },
      { name: 'vimeo' },
      { name: 'foursquare' },
      { name: 'myspace' },
      { name: 'yelp' },
      { name: 'etsy' },
      { name: 'reddit' },
      { name: 'blogger' },
      { name: 'tumblr' },
    ];
  }
});
