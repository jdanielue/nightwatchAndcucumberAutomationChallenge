# Automation Challenge

## Description
In this challenge you will automate some flows in the SauceDemo application
(https://www.saucedemo.com/). SauceDemo is an app where you can practice your testing and
automation skills. It’s a small shopping page where you can add items to a cart, remove them,
check them out…and that’s it! The idea is to measure how quick you are able to learn new tools
(if you do not know them) and how clean is your automation code. To understand how
SauceDemo should work, you should first explore it manually using the standard_user. This
user allows you to see how the application should work. Then you should log in with the
problem_user. This will allow you to see a SauceDemo full of bugs.
## Scope
### With the standard_user, the expected flows that should be automated are:
1. Log In
2. Log Out
3. Add an item to Cart
4. Remove an item from the Cart
5. Checkout an item in the Cart
### With the problem_user, the expected flows that should be automated are:
1. Log In
2. Log Out
3. Add an item to Cart
4. Remove an item from the Cart
5. Checkout an item in the Cart
Keep in mind that with the problem_user, some tests should fail.
## Tools
To solve this challenge, you need to use these tools:
- CucumberJS to write BDD scenarios
- NightwatchJS to automate the BDD scenarios. Use the Page Object pattern described
by Nightwatch
- Javascript as programming language
- NodeJS to build your project and manage your dependencies
Time
You have one week from the moment you receive this document to solve the challenge.
Questions are allowed, so feel free to ask anything you need. Once you are ready to deliver
your solution, upload it to a public github repository where we can review your code. Give the
Github URL to the recruiter who gave you this challenge.

## Installation

1. ``` git clone https://github.com/jdanielue/nightwatchAndcucumberAutomationChallenge ```
2. ``` npm install ```

##  How to Use?

### to run test cases for standard_user

``` npm run e2e-test-standard```

### to run test cases for problem_user

``` npm run e2e-test-problem```

### to run test cases for both users

``` npm run e2e-test```