Feature: Swag Labs - login

Background: poreconditions
Given the user is on the homepage "https://www.saucedemo.com"
Given the user joins the Swag labs page home page


Scenario: the usernames and passwords are visible

  Then the user is "standard_user"
  And the password label is "secret_sauce"

Scenario: the user is not able to log in when the user uses a wrong username

  When the user types the username "wrong_user"
  When the user types the password "secret_sauce"
  When the user clicks on submit
  Then the user sees the error message "Epic sadface: Username and password do not match any user in this service"

@standard
  Examples:
| username | password |
| standard_user  | secret_sauce  |

@problem
  Examples:
| username | password |
| problem_user  | secret_sauce  |

Scenario: the user is able to log in and access to the inventory page

  When the user types the username "standard_user"
  When the user types the password "secret_sauce"
  When the user clicks on submit
  Then the user joins the inventory page "https://www.saucedemo.com/inventory.html"

@standard
  Examples:
| username | password |
| standard_user  | secret_sauce  |

@problem
  Examples:
| username | password |
| problem_user  | secret_sauce  |