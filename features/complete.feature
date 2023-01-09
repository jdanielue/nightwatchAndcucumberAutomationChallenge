Feature: Swag Labs - complete

  Scenario Outline: the user is able to acces the checkout page - step 2
  Given the user is logged with the credentials "<username>" and "<password>"
  Given the user clicks on the product Sauce Labs Backpack
  Given the user clicks on the shopping cart
  Given the user clicks on the checkout button
  Given the the user types First Name "daniel" Last Name "urrego" and the Postal Code "1235"and clicks on continue
  Given the user clicks on the finish button
  When the user is on the complete page "https://www.saucedemo.com/checkout-complete.html"
  Then the user is able to see the gratitude message "THANK YOU FOR YOUR ORDER"

Examples:
| username | password |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |