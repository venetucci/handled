import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('network', 'Network', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it has a name', function() {
  var network = this.subject({ name: "Twitter" });

  equal(network.get("name"), "Twitter");
});
