const elements =  {
  availableUsersNames: '#login_credentials',
  availablePasswords: '.login_password',
  userNameInput: '#user-name',
  passwordInput: '#password',
  submitButton: '#login-button',
  errorText: 'h3',
}

const loginUserFunc = function loginUser(client, userName, password) {

  return client
  .init().waitForElementVisible('body', 1000)
  .waitForElementVisible(elements.userNameInput)
  .clearValue(elements.userNameInput)
  .setValue(elements.userNameInput, userName)
  .waitForElementVisible(elements.passwordInput)
  .clearValue(elements.passwordInput)
  .setValue(elements.passwordInput, password)
  .click(elements.submitButton);

}

module.exports = {
  loginUserFunc,
  elements
};
