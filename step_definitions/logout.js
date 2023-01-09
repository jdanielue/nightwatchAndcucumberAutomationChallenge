const { client } = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');
let { loginUserFunc } = require("../pages/loginPage.js");
const { elements } = require('../pages/inventoryPage.js');

Given(/^the user is logged with the credentials "([^"]*)" and "([^"]*)"$/, (username, password) => {
  return loginUserFunc(client, username, password).
  expect.element('#header_container > div.header_secondary_container > span').text.to.equal('PRODUCTS');
});

When(/^the user clicks on the Hamburger button$/, () => {
  return client.click(elements.hamburgerButton)
});

When(/^the user clicks on the logout button$/, () => {
  return client.click(elements.logoutButton)
});

Then(/^the user is redirected to the homepage "([^"]*)"$/, (homepageURL) => {
  return client.expect.url().to.contain(homepageURL);
});