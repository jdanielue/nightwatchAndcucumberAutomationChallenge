Feature: Swag Labs - logout

Scenario Outline: the user is able to successfully logout

  Given the user is logged with the credentials "<username>" and "<password>"
  When the user clicks on the Hamburger button
  And the user clicks on the logout button
  Then the user is redirected to the homepage "https://www.saucedemo.com"

Examples:
| username | password |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |
