const { client } = require('nightwatch-api');
const {Given, Then} = require('cucumber');

Given(/^I join the swag labs page home page$/, () => {
  return client.url('https://www.saucedemo.com/').waitForElementVisible('body', 1000);
});

Then(/^the user is "([^"]*)"$/, userName => {
  return client.assert.textEquals('//*[@id="login_credentials"]/text()[1]', userName);
});

Then(/^the password label for all users exists$/, () => {
  return client.assert.visible('.login_password');
});