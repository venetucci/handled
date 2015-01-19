import Ember from 'ember';

export default Ember.ArrayController.extend({
  handle: '',

  checkAvailability: function(model, handle) {
    model.set('status', 'unavailable');
    $.ajax({
      type: 'GET',
      url: model.get('corsProxyUrl') + handle,
      timeout: 5000,
      success: function(data, textStatus ){
        model.set('available', false);
      }.bind(this),
      error: function(xhr, textStatus, errorThrown){
        model.set('available', true);
      }.bind(this)
    });
  },

  actions: {
    checkHandle: function() {
      var handle = this.get("handle");

      /* TODO simplify this */
      this.get('model').forEach(function(model) {
        this.checkAvailability(model, handle);
      }.bind(this));
    }
  }
});
