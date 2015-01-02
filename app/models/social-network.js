import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  logo: DS.attr("string"),
  status: DS.attr('string'),

  available: function() {
    return this.get('status') === 'available';
  }.property('status')
});
