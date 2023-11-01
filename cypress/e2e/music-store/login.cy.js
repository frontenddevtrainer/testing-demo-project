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

  it("should be able to type value and send request", () => {
    const email = "abc@example.com";
    const password = "Password@1";
    LoginFormPageObject.fillLoginForm(email, password);

    cy.intercept("POST", "http://localhost:3000/login", {
      statusCode: 200,
      body: {},
    }).as("loginAPI");

    LoginFormPageObject.submitLoginForm();

    cy.wait("@loginAPI").then((interception) => {
      expect(interception.request.method).to.equal("POST");
      expect(interception.request.body).to.include({
        email: email,
        password: password,
      });
    });
  });
});
