Feature: Swag Labs -login

Scenario: the usernames and passwords are visible

  Given I join the swag labs page home page
  Then the user is "standard_user"
  And the password label for all users exists