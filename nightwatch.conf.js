const chromedriver = require('chromedriver');

module.exports = {
 //tests is a folder in workspace which has the step definitions
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9516,
        cli_args: ['--port=9516']
      },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};