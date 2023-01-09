Feature: Swag Labs - checkout page 2

Scenario Outline: the user is able to acces the checkout page - step 2
  Given the user is logged with the credentials "<username>" and "<password>"
  Given the user clicks on the product Sauce Labs Backpack
  Given the user clicks on the shopping cart
  Given the user clicks on the checkout button
  Given the the user types First Name "daniel" Last Name "urrego" and the Postal Code "1235"and clicks on continue
  When the user is on the checkout page 2 "https://www.saucedemo.com/checkout-step-two.html"
  Then the user is able to see the same product that selected on the shopping cart "Sauce Labs Backpack"

  Examples:
| username | password |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |

Scenario Outline: the user fill the First name, last Name and Postal code
  Given the user is logged with the credentials "<username>" and "<password>"
  Given the user clicks on the product Sauce Labs Backpack
  Given the user clicks on the shopping cart
  Given the user clicks on the checkout button
  Given the the user types First Name "daniel" Last Name "urrego" and the Postal Code "1235"and clicks on continue
  Given the user is on the checkout page 2 "https://www.saucedemo.com/checkout-step-two.html"
  When the user clicks on the finish button
  Then the user is redirected to the complete page "https://www.saucedemo.com/checkout-complete.html"

Examples:
| username | password |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |