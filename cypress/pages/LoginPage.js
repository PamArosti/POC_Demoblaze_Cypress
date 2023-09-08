class LoginPage {
  elements = {
    usernameInput: () => cy.get("#loginusername"),
    passwordInput: () => cy.get("#loginpassword"),
    loginBtn: () => cy.get("#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"),
    signUpButton: () => cy.get('#signin2'),
    inputUsername: () => cy.get('#sign-username'),
    inputPassword: () => cy.get('#sign-password'),
    userNameChecker: () => cy.get('#nameofuser'),
    confirmSignUpButton: () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
    signInButton: () => cy.get('#login2')
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  submitLogin(username, password) {
    this.elements.signInButton().click();
    cy.wait(2000);
    this.elements.usernameInput().type(username);
    cy.wait(2000);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  submitSignUp() {
    const username = this.generateRandomUserName();
    const password = this.generateRandomPassword();
    this.elements.signUpButton().click();
    cy.wait(1000);
    this.elements.inputUsername().type(username);
    this.elements.inputPassword().type(password);
    this.elements.confirmSignUpButton().click();
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Sign up successful.');
    });
    cy.wait(1000);
    this.submitLogin(username, password);
  }

  CheckHeaderCredentials(username) {
    this.elements.userNameChecker().should('contain', 'Welcome');
  }

  generateRandomUserName() {
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    let username = '';

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * letras.length);
      username += letras[randomIndex];
    }

    return username;
  }

  generateRandomPassword() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let senha = '';

    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[randomIndex];
    }

    return senha;
  }

  submitWrongLogin(username, password) {
    this.elements.signInButton().click();
    cy.wait(2000);
    this.elements.usernameInput().type(username);
    cy.wait(2000);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  errorMessage() {
    cy.on('window:alert', (message) => {
      cy.log('Message', message);      
      cy.wrap(message).should('eq', 'Wrong password.');
    });
 }

}
export const loginPage = new LoginPage();

