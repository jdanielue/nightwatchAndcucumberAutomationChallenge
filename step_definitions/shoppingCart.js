const { client } = require('nightwatch-api');
const {When, Then} = require('cucumber');
const inventory = require('../pages/inventoryPage.js');
const shoppingCart = require('../pages/shoppingCartPage.js');

When(/^the user clicks on the shopping cart$/, () => {
  return inventory.clickShoppingCar(client)
});

Then(/^the user is redirected to the shopping cart page "([^"]*)"$/, (shoppingCartURL) => {
  return client.expect.url().to.contain(shoppingCartURL);
});

When(/^When the user clicks on the shopping cart$/, () => {
  return inventory.clickShoppingCar(client)
});

When(/^the user clicks on the product Sauce Labs Backpack$/, () => {
  return client.click(inventory.elements.sauceLabsBackPack)
});

Then(/^the shopping cart badge has "([^"]*)" element$/, (elementsInTheCart) => {
  return client.expect.element(inventory.elements.shoppingCartCounter).to.have.text.that.equals(elementsInTheCart);
});

When(/^the user clicks on remove the product Sauce Labs Backpack$/, () => {
  return client.click(inventory.elements.removeSauceLabsBackPack)
});

Then(/^the shopping cart badge doesn't have any element$/, () => {
  return client.expect.element(inventory.elements.shoppingCartCounter).to.not.be.present;
});

Then(/^the user is able to Checkout  the item "([^"]*)" in the Cart$/, (productCheckout) => {
  return client.expect.element(shoppingCart.elements.productTitle).to.have.text.that.equals(productCheckout);
});