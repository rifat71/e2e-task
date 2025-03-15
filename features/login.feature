Feature: Login functionality
@wip
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid 'automate.cheq@yopmail.com' and 'Automation@2025'
    Then I should be logged in successfully

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter invalid email "dummy@gmail.com" and password "12345678"
    Then I should see an error message "ErrorInvalid Username or Password"
