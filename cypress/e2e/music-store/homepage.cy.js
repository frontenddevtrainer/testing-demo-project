/// <reference types="cypress" />
import HeaderPageObject from "../../pageobjects/header";

describe("Testing homepage.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("should show heading as Music Store", () => {
    HeaderPageObject.findTitle().should("have.text", "Music Store");
  });

  it("should have drop down for profile", () => {
    HeaderPageObject.findProfileDropDown().should("exist");
  });

  it("should click profile and verify menu is open", ()=>{

    HeaderPageObject.findMenuLinks().should("not.exist");

    HeaderPageObject.findMenuArrow().contains("arrow_drop_down")

    HeaderPageObject.findProfileDropDownButton().click();

    HeaderPageObject.findMenuArrow().contains("arrow_drop_up")

    HeaderPageObject.findMenuLinks().should("exist");

  })

});
