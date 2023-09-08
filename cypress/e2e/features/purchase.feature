Feature: Purchase page

    Feature Purchase a product

    Background:
        Given A web browser is at the demoblaze home page

    Scenario: Success Purchase
        When a user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then I will add the phones to the cart, then remove the item, then place the order 