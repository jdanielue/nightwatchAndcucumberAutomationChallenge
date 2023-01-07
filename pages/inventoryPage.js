const shoppingCartElements = require('./shoppingCartPage')

const elements = {
  hamburgerButton : '#react-burger-menu-btn',
  logoutButton : '#logout_sidebar_link',
  homepageURL : 'https://www.saucedemo.com',
  shoppingCart : '#shopping_cart_container > a',
}

const logoutUserFunc = function loginUser(client) {

  return client
  .waitForElementVisible('body', 1000)
  .waitForElementVisible(elements.hamburgerButton)
  .click(elements.hamburgerButton)
  .waitForElementVisible(elements.logoutButton)
  .click(elements.logoutButton)
  .expect.url().to.contain(homepageURL);
}

const clickShoppingCar = (client) => {
  return client
  .waitForElementVisible('body', 1000)
  .click(elements.shoppingCart)
  .expect.element(shoppingCartElements.elements.cartTitle).text.to.equal(shoppingCartElements.elements.carTitleLabel);
}

module.exports = {
  logoutUserFunc,
  clickShoppingCar,
  elements
};