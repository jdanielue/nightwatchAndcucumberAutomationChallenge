const elements = {
  hamburgerButton : '#react-burger-menu-btn',
  logoutButton : '#logout_sidebar_link',
  homepageURL : 'https://www.saucedemo.com'
}

const logoutUserFunc = function loginUser(client, userName, password) {

  return client
  .waitForElementVisible('body', 1000)
  .waitForElementVisible(elements.hamburgerButton)
  .click(elements.hamburgerButton)
  .waitForElementVisible(elements.logoutButton)
  .click(elements.logoutButton)
  .expect.url().to.contain(homepageURL)
}

module.exports = {
  logoutUserFunc,
  elements
};