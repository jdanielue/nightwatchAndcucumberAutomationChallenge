const { client } = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');

Given(/^the user joins the Swag labs page home page$/, () => {
  return client.init().waitForElementVisible('body', 1000);
});

Then(/^the user is "([^"]*)"$/, userName => {
  return client.expect.element('#login_credentials > h4').text.to.equals(userName);
});

Then(/^the password label for all users exists$/, () => {
  return client.expect.element('.login_password').to.be.present;
});

Given(/the user is on the homepage "([^"]*)"$/, (homepageURL) => {
  return client.expect.url().to.contain(homepageURL);
});

When(/^the user types the username "([^"]*)"$/, userName => {
  return client
  .waitForElementVisible('#user-name')
  .setValue('#user-name', userName);
});

When(/^the user types the password "([^"]*)"$/, password => {
  return client
  .waitForElementVisible('#password')
  .setValue('#password', password);
});

When(/^the user clicks on submit$/, () => {
  return client.click('#login-button');
});

Then(/^the user joins the inventory page "([^"]*)"$/, inventoryURL => {
  return client.expect.url().to.contain(inventoryURL);
});