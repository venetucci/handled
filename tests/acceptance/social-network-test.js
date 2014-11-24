import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: SocialNetwork', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /social-network', function() {
  visit('/');
  fillIn('#handle', 'abc');

  andThen(function() {
    equal(find('.social-network:first .baseUrl').text(), 'twitter.com/');
    equal(find('.social-network:first .handle').text(), 'abc');
  });
});
