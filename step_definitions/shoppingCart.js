const { client } = require('nightwatch-api');
const {When, Then} = require('cucumber');
const inventory = require('../pages/inventoryPage.js');

When(/^the user clicks on the shopping cart$/, () => {
  return inventory.clickShoppingCar(client)
});

Then(/^the user is redirected to the shopping cart page "([^"]*)"$/, (shoppingCartURL) => {
  return client.expect.url().to.contain(shoppingCartURL);
});