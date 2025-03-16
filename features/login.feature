Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter email 'automate.cheq@yopmail.com' and password 'Automation@2025'
    Then I should see the "My Events" header

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter email "dummy@gmail.com" and password "12345678"
    Then I should see an error message "ErrorInvalid Username or Password"
@wip
  Scenario: Verify subtotal after adding items to the cart
    Given I am on the login page
    When I enter email 'automate.cheq@yopmail.com' and password 'Automation@2025'
    Then I should see the "My Events" header
    And I should see the "March 2025" text on my-event page
    When I click the "17" button on my-event page
    And I click the "Automation Horizon" link on my-event page
    And I click the "CONTINUE" button on my-event page

    Then I should see the "My Suites" header on my-suites page
    When I select the "Suite (North)" radio button on my-suites page
    And I click the "Continue" button on my-suites page

    And I click the "Place an order" button on popup

    Then I should see the "Suite Preferences" header on suite-preference page
    When I click the "Save" button on suite-preferance page

    Then I should see the header on cheqQASuitePartnerPage page
    And I should see the "Pre-Order for: Suite (North)" text on cheqQASuitePartnerPage page
    When I add 1 item from each category to the cart
      | Category                     | Item Name         |
      | Soft Drinks - Pantry 4 West  | Coke (6 Pack)     |
      | Soft Drinks - Pantry 10 East | Sprite (6 Pack)   |
      | Desserts - Pantry 4 West     | Biryani           |
      | Desserts - Pantry 10 East    | Margarita         |
      | Beer - East                  | Chicken Teriyaki  |
      | Burgers                      | Farm house burger |
    # And I wait for 30 sec
    Then I should see "6" items in the cart on cheqQASuitePartnerPage page
    When I click the View Cart button on cheqQASuitePartnerPage page
    Then I should see the "My Order" title on my-order page
    When I click the 'Save  Pre-Order' button on my-order page
    # And I should see the correct subtotal
