Feature: Swag Labs - logout

Scenario: the user is able to successfully logout

  Given the user is logged
  When the user clicks on the Hamburger button
  And the user clicks on the logout button
  Then the user is redirected to the homepage "https://www.saucedemo.com"

