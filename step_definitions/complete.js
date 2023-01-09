const { client } = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
const completePage = require('../pages/completePage.js');

When(/^the user is on the complete page "([^"]*)"$/, (completePageURL) => {
  return client.expect.url().to.contain(completePageURL);
});

Then(/^the user is able to see the gratitude message "([^"]*)"$/, (thankyouLabel) => {
  return client.expect.element(completePage.elements.gratitudeMessage).to.have.text.that.equals(thankyouLabel);
});
