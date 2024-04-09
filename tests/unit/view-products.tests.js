const assert = require('assert');
const fetch = require('node-fetch');

suite('View Cookbook page', function() {
  test('Page title', async function() {
    let res = await fetch("http://localhost:8080/cookbook");
    let body = await res.text();
    assert.ok(body.includes("<h1>Cookbook</h1>"));
  });
  
  test('My Cookbook', async function() {
    let res = await fetch("http://localhost:8080/cookbook");
    let body = await res.text();
    let correctList = body.includes("<ul><li>Butter - 2 table spoons</li><li>Flour - 1 cup</li><li>Milk - 3 cups</li><li>Salami - 100 g</li></ul>");
    assert.ok(correctList, "Cookbook content mismatch");
  });  
});
