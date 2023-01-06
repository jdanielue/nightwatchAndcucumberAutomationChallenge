const chromedriver = require('chromedriver');


module.exports = {
  page_objects_path: ["pages"],
  test_settings: {
    default: {
      launch_url: 'https://www.saucedemo.com/',
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