const { client } = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');

Given(/^the user joins the Swag labs page home page$/, () => {
  return client.init().waitForElementVisible('body', 1000);
});

Then(/^the user is "([^"]*)"$/, userName => {
  return client.expect.element('#login_credentials').text.to.contain(userName);
});

Then(/^the password label is "([^"]*)"$/, userPassword => {
  return client.expect.element('.login_password').text.to.contain(userPassword);
});

Given(/the user is on the homepage "([^"]*)"$/, (homepageURL) => {
  return client.expect.url().to.contain(homepageURL);
});

When(/^the user types the username "([^"]*)"$/, userName => {
  return client
  .waitForElementVisible('#user-name')
  .clearValue('#user-name')
  .setValue('#user-name', userName);
});

When(/^the user types the password "([^"]*)"$/, password => {
  return client
  .waitForElementVisible('#password')
  .clearValue('#password')
  .setValue('#password', password);
});

When(/^the user clicks on submit$/, () => {
  return client.click('#login-button');
});

Then(/^the user joins the inventory page "([^"]*)"$/, inventoryURL => {
  return client.expect.url().to.contain(inventoryURL);
});

Then(/^the user sees the error message "([^"]*)"$/, errorMessage => {
  return client.expect.element('h3').text.to.equal(errorMessage);
});