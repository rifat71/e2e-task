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

    # Then I should see the "Place an order?" on popup page
    When I click the "Place an order" button on popup

    Then I should see the "Suite Preferences" header on suite-preference page
    When I click the "Save" button on suite-preferance page

    # Then I should see the "CHEQ QA Suite Partner" header
    # And I should see the "Pre-Order for: Suite (North)" text
    # When I click the "Arrow Right" icon
    # And I select the "Coke (6 Pack)" item
    # And I add the item to the order
    # And I go back to the Categories page
    # And I select the "Sprite (6 Pack)" item
    # And I add the item to the order
    # And I go back to the Categories page
    # And I select the "Biryani" item
    # And I add the item to the order
    # And I go back to the Categories page
    # And I select the "Margarita" item
    # And I add the item to the order
    # And I go back to the Categories page
    # And I select the "Chicken Teriyaki" item
    # And I add the item to the order
    # And I go back to the Categories page
    # And I select the "Farm house burger" item
    # And I add the item to the order
    # And I go back to the Categories page
    # Then I should see "6" items in the cart
    # When I click the "View Cart" button
    # Then I should see the "My Order" title
    # And I should see the correct subtotal
