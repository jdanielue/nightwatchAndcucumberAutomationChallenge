Feature: Swag Labs - checkout page 1

Scenario Outline: the user is able to acces the checkout page
  Given the user is logged with the credentials "<username>" and "<password>"
  Given the user clicks on the product Sauce Labs Backpack
  Given the user clicks on the shopping cart
  When the user clicks on the checkout button
  Then the user is redirected to the checkout page "https://www.saucedemo.com/checkout-step-one.html"

  Examples:
| username | password |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |

Scenario Outline: the user fill the First name, last Name and Postal code
  Given the user is logged with the credentials "<username>" and "<password>"
  Given the user clicks on the product Sauce Labs Backpack
  Given the user clicks on the shopping cart
  Given the user clicks on the checkout button
  When the the user types First Name "daniel" Last Name "urrego" and the Postal Code "1235"and clicks on continue
  Then the user is redirected to the checkout page "https://www.saucedemo.com/checkout-step-two.html"


Examples:
| username | password |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |