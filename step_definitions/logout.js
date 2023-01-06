const { client } = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');
let { loginUserFunc } = require("../pages/loginPage.js");
const { elements } = require('../pages/inventory.js');

Given(/^the user is logged$/, () => {
  return loginUserFunc(client, "standard_user", "secret_sauce").
  expect.element('#header_container > div.header_secondary_container > span').text.to.equal('PRODUCTS');
});

When(/^the user clicks on the Hamburger button$/, () => {
  return client.click(elements.hamburgerButton)
});

When(/^the click on the logout button$/, () => {
  return client.click(elements.logoutButton)
});

Then(/^the user is redirected to the homepage "([^"]*)"$/, (homepageURL) => {
  return client.expect.url().to.contain(homepageURL);
});