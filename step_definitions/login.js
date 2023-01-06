const { client } = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');
var loginPage = require("../pages/loginPage.js");

Given(/^the user joins the Swag labs page home page$/, () => {
  return client.init().waitForElementVisible('body', 1000);
});

Then(/^the user is "([^"]*)"$/, userName => {
  return client.expect.element(loginPage.elements.availableUsersNames).text.to.contain(userName);
});

Then(/^the password label is "([^"]*)"$/, userPassword => {
  return client.expect.element(loginPage.elements.availablePasswords).text.to.contain(userPassword);
});

Given(/the user is on the homepage "([^"]*)"$/, (homepageURL) => {
  return client.expect.url().to.contain(homepageURL);
});

When(/^the user types the username "([^"]*)"$/, userName => {
  return client
  .waitForElementVisible(loginPage.elements.userNameInput)
  .clearValue(loginPage.elements.userNameInput)
  .setValue(loginPage.elements.userNameInput, userName);
});

When(/^the user types the password "([^"]*)"$/, password => {
  return client
  .waitForElementVisible(loginPage.elements.passwordInput)
  .clearValue(loginPage.elements.passwordInput)
  .setValue(loginPage.elements.passwordInput, password);
});

When(/^the user clicks on submit$/, () => {
  return client.click(loginPage.elements.submitButton);
});

Then(/^the user joins the inventory page "([^"]*)"$/, inventoryURL => {
  return client.expect.url().to.contain(inventoryURL);
});

Then(/^the user sees the error message "([^"]*)"$/, errorMessage => {
  return client.expect.element(loginPage.elements.errorText).text.to.equal(errorMessage);
});