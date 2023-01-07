Feature: Swag Labs - Shopping Cart

Scenario: the user is able to acces the shopping cart page

  Given the user is logged
  When the user clicks on the shopping cart
  Then the user is redirected to the shopping cart page "https://www.saucedemo.com/cart.html"
