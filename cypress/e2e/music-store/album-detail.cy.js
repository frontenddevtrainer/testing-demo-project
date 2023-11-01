/// <reference types="cypress" />
import AlbumCardPageObject from "../../pageobjects/album-card";
import HeaderPageObject from "../../pageobjects/header";

describe("Testing homepage.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/albums/1");
  });

  it("should have content for demo", () => {

    cy.get('p').should("have.text", "albums-screen works!")

  });
});
