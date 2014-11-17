import DS from 'ember-data';

export default DS.Model.extend({
  urlForHandle: function(handle) {
    return this.get("baseUrl") + "/" + handle;
  }
});
