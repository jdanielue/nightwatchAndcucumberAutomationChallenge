Feature: Swag Labs -login

Scenario: the usernames and passwords are visible

  Given the user joins the Swag labs page home page
  Then the user is "Accepted usernames are:"
  And the password label for all users exists

Scenario: the login form is visible

  Given the user is on the homepage "https://www.saucedemo.com"
  When the user types the username "standard_user"
  When the user types the password "secret_sauce"
  When the user clicks on submit
  Then the user joins the inventory page "https://www.saucedemo.com/inventory.html"
