const { client } = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');
const shoppingCart = require('../pages/shoppingCartPage.js');
const checkOutOnePage = require('../pages/checkoutOnePage.js');

When(/^the user clicks on the checkout button$/, () => {
  return client.click(shoppingCart.elements.checkOutButton)
});

Then(/^the user is redirected to the checkout page "([^"]*)"$/, (checkoutPageURL) => {
  return client.expect.url().to.contain(checkoutPageURL);
});

When(/^the the user types First Name "([^"]*)" Last Name "([^"]*)" and the Postal Code "([^"]*)"and clicks on continue$/, (firstName, lastName, zip) => {
  return client
  .waitForElementVisible(checkOutOnePage.elements.firstNameInput)
  .clearValue(checkOutOnePage.elements.firstNameInput)
  .setValue(checkOutOnePage.elements.firstNameInput, firstName)
  .waitForElementVisible(checkOutOnePage.elements.lastNameInput)
  .clearValue(checkOutOnePage.elements.lastNameInput)
  .setValue(checkOutOnePage.elements.lastNameInput, lastName)
  .waitForElementVisible(checkOutOnePage.elements.zipInput)
  .clearValue(checkOutOnePage.elements.zipInput)
  .setValue(checkOutOnePage.elements.zipInput, zip)
  .click(checkOutOnePage.elements.continueButton)
});