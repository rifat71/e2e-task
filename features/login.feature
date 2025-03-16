@wip1
Feature: Login functionality
  @sanity
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter email 'automate.cheq@yopmail.com' and password 'Automation@2025'
    Then I should see the "My Events" header
  
  @parallel
  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter email "dummy@gmail.com" and password "12345678"
    Then I should see an error message "ErrorInvalid Username or Password"
