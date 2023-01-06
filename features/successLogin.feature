Feature: Swag Labs - login

Scenario: the usernames and passwords are visible

  Given the user joins the Swag labs page home page
  Then the user is "standard_user"
  And the password label is "secret_sauce"

Scenario: the user is not able to log in when the user uses a wrong username

  Given the user is on the homepage "https://www.saucedemo.com"
  When the user types the username "wrong_user"
  When the user types the password "secret_sauce"
  When the user clicks on submit
  Then the user sees the error message "Epic sadface: Username and password do not match any user in this service"

Scenario: the user is able to log in and access to the inventory page

  Given the user is on the homepage "https://www.saucedemo.com"
  When the user types the username "standard_user"
  When the user types the password "secret_sauce"
  When the user clicks on submit
  Then the user joins the inventory page "https://www.saucedemo.com/inventory.html"
