import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage';
import {cartPage} from '@pages/CartPage';
import {subCategories} from '@pages/SubCategories';

Given("A web browser is at the demoblaze home page", () => {
  cy.visit("/");
});

When("An user does the signup and after that he does the login", () => {
  loginPage.submitSignUp()
  
});
When("a user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
  
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitWrongLogin(row.username, row.password)

  });
});
Then("the username must be shown poperly in the header", () => {
  loginPage.CheckHeaderCredentials()
});

Then("a message is displayed The password does not correspond to any user of this service", () => {
  loginPage.errorMessage()
});
 
Then("I will add the phones to the cart, then remove the item, then place the order", () => {
  cartPage.selectRemovePhone();
  cartPage.fillPurchaseModal();
});

Then("I check the subcategories of the phones by checking the items", (dataTable) => {
  subCategories.verifyPhoneItems()
  const productList = dataTable.rawTable.slice(1); 
  productList.forEach((product) => {
    cy.contains(product[0]).should('be.visible');
    cy.contains(product[0]).should('contain', product);
  });
});

Then("I check the subcategories of the laptops by checking the items", (dataTable) => {
  subCategories.verifyLapTopsItems()
  const productList = dataTable.rawTable.slice(1); 
  productList.forEach((product) => {
    cy.contains(product[0]).should('be.visible');
    cy.contains(product[0]).should('contain', product);
  });
});

Then("I check the subcategories of the monitors by checking the items", (dataTable) => {
  subCategories.verifyMonitorsItems()
  const productList = dataTable.rawTable.slice(1); 
  productList.forEach((product) => {
    cy.contains(product[0]).should('be.visible');
    cy.contains(product[0]).should('contain', product);
  });
});
