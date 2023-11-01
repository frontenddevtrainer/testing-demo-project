/// <reference types="cypress" />

describe("Testing homepage.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("should show heading as Music Store", () => {
    cy.get("app-header .text-2xl").should("have.text", "Music Store");
  });


  it("should have drop down for profile", ()=>{
    cy.get('[data-testid="profile-dropdown"]').should("exist");
  })
});
