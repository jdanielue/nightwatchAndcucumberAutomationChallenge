Feature: Swag Labs - checkout page 1

Scenario: the user is able to acces the checkout page

  Given the user is logged
  Given the user clicks on the product Sauce Labs Backpack
  Given the user clicks on the shopping cart
  When the user clicks on the checkout button
  Then the user is redirected to the checkout page "https://www.saucedemo.com/checkout-step-one.html"

Scenario: the user fill the First name, last Name and Postal code

  Given the user is redirected to the checkout page "https://www.saucedemo.com/checkout-step-one.html"
  When the the user types First Name "daniel" Last Name "urrego" and the Postal Code "1235"and clicks on continue
  Then the user is redirected to the checkout page "https://www.saucedemo.com/checkout-step-two.html"


# Scenario: the user doesn't fill the first name

#   Given the user is redirected to the checkout page "https://www.saucedemo.com/checkout-step-one.html"
#   When the types Last Name "" and Postal code ""  clicks on continue
#   Then the user sees the error message

# Scenario: the user doesn't fill the last name

#   Given the user is redirected to the checkout page "https://www.saucedemo.com/checkout-step-one.html"
#   When the types First Name "" and Postal Code "" and clicks on continue
#   Then the user sees the error message
