Feature: Swag Labs - Shopping Cart

Scenario Outline: the user is able to add 1 item from the shopping cart

  Given the user is logged with the credentials "<username>" and "<password>"
  When the user clicks on the product Sauce Labs Backpack
  Then the shopping cart badge has "1" element

Examples:
| username | password |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |

Scenario Outline: the user is able to Checkout an item in the Cart

  Given the user is logged with the credentials "<username>" and "<password>"
  Given the user clicks on the product Sauce Labs Backpack
  When the user clicks on the shopping cart
  Then the user is able to Checkout  the item "Sauce Labs Backpack" in the Cart

Examples:
| username | password |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |

Scenario Outline: the user is able to remove 1 item from the shopping cart

  Given the user is logged with the credentials "<username>" and "<password>"
  Given the user clicks on the product Sauce Labs Backpack
  When the user clicks on remove the product Sauce Labs Backpack
  Then the shopping cart badge doesn't have any element

Examples:
| username | password |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |

Scenario Outline: the user is able to acces the shopping cart page

  Given the user is logged with the credentials "<username>" and "<password>"
  Given the user clicks on the product Sauce Labs Backpack
  When the user clicks on the shopping cart
  Then the user is redirected to the shopping cart page "https://www.saucedemo.com/cart.html"

Examples:
| username | password |
| standard_user  | secret_sauce  |
| problem_user  | secret_sauce  |
