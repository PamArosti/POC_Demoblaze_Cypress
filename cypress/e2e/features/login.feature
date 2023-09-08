Feature: Login page
    Feature Login page will work depending on the user credentials.

  Background: 
    Given A web browser is at the demoblaze home page

  Scenario: Success Signup and Login
    When An user does the signup and after that he does the login
    Then the username must be shown poperly in the header

  Scenario: Incorrect Username Login
    When A user provides incorrect credentials, and clicks on the login button
      | username | password     |
      | testName | Test12563222 |
    Then a message is displayed The password does not correspond to any user of this service
