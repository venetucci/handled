import {
  moduleForModel,
  test
} from "ember-qunit";

moduleForModel("network", "Network", {
  // Specify the other units that are required for this test.
  needs: []
});

test("it has a name", function() {
  var network = this.subject({ name: "Twitter" });

  equal(network.get("name"), "Twitter");
});

test("it generates the lookup URL based on the base URL and handle", function() {
  var network = this.subject({ baseUrl: "https://twitter.com" });

  equal(network.urlForHandle("bob"), "https://twitter.com/bob");
});
