Feature: Validate whether the main category contains subcategory items
    Feature: Validate whether the main category contains subcategory items

  Background: 
    Given A web browser is at the demoblaze home page

  Scenario: Main category contains subcategory items
    When a user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
    Then I check the subcategories of the phones by checking the items
      | products          |
      | Samsung galaxy s6 |
      | Nokia lumia 1520  |
      | Nexus 6           |
      | Iphone 6 32gb     |
      | Sony xperia z5    |
      | HTC One M9        |
    Then I check the subcategories of the laptops by checking the items
      | products            |
      | Sony vaio i5        |
      | Sony vaio i7        |
      | Dell i7 8gb         |
      | 2017 Dell 15.6 Inch |
      | MacBook Pro         |
    Then I check the subcategories of the monitors by checking the items
      | products         |
      | Apple monitor 24 |
      | ASUS Full HD     |
