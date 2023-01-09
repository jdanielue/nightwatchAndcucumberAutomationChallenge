const { client } = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
const checkOutTwoPage = require('../pages/checkoutTwoPage.js');

Then(/^the user is able to see the same product that selected on the shopping cart "([^"]*)"$/, (productCheckout) => {
  return client.expect.element(checkOutTwoPage.elements.checkoutItem).to.have.text.that.equals(productCheckout);
});

When(/^the user is on the checkout page 2 "([^"]*)"$/, (checkoutPageURL) => {
  return client.expect.url().to.contain(checkoutPageURL);
});

When(/^the user clicks on the finish button$/, () => {
  return client.click(checkOutTwoPage.elements.finishButton);
});

Then(/^the user is redirected to the complete page "([^"]*)"$/, (completePageURL) => {
  return client.expect.url().to.contain(completePageURL);
});
