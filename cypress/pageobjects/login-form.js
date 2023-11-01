class LoginPageObject {
  findEmailField() {
    return cy.get('[name="email"]');
  }

  findPasswordField() {
    return cy.get('[name="password"]');
  }

  findButton() {
    return cy.get('[type="submit"]');
  }

  fillLoginForm(email, password) {
    this.findEmailField().type(email);
    this.findPasswordField().type(password);
  }

  submitLoginForm() {
    this.findButton().click();
  }
}

export default new LoginPageObject();
