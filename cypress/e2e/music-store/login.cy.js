/// <reference types="cypress" />
import LoginFormPageObject from "../../pageobjects/login-form";
("../../pageobjects/login-form");

describe("Testing homepage.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/user/login");
  });

  it("should have fields", () => {
    LoginFormPageObject.findEmailField().should("exist");
    LoginFormPageObject.findPasswordField().should("exist");
  });

  it("should be able to type value and verify control values", () => {
    const email = "abc@example.com";
    const password = "Password@1";
    LoginFormPageObject.fillLoginForm(email, password);

    LoginFormPageObject.findEmailField().should("have.value", email);
    LoginFormPageObject.findPasswordField().should("have.value", password);
  });
});
