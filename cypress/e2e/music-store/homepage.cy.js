/// <reference types="cypress" />
import AlbumCardPageObject from "../../pageobjects/album-card";
import HeaderPageObject from "../../pageobjects/header";

describe("Testing homepage.", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3000/albums", {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: "Album 1",
          price: 15.99,
          singers: ["Singer A", "Singer B"],
          thumbnail: "https://via.placeholder.com/150",
          isReleased: true,
        },
        {
          id: 2,
          name: "Album 1",
          price: 15.99,
          singers: ["Singer A", "Singer B"],
          thumbnail: "https://via.placeholder.com/150",
          isReleased: true,
        },
      ],
    }).as("getAlbums");

    cy.visit("http://localhost:4200");
  });

  it("should show heading as Music Store", () => {
    HeaderPageObject.findTitle().should("have.text", "Music Store");
  });

  it("should have drop down for profile", () => {
    HeaderPageObject.findProfileDropDown().should("exist");
  });

  it("should click profile and verify menu is open", () => {
    HeaderPageObject.findMenuLinks().should("not.exist");

    HeaderPageObject.findMenuArrow().contains("arrow_drop_down");

    HeaderPageObject.findProfileDropDownButton().click();

    HeaderPageObject.findMenuArrow().contains("arrow_drop_up");

    HeaderPageObject.findMenuLinks().should("exist");
  });

  it("should load 1 card for albums", () => {
    cy.wait("@getAlbums");
  });

  it("should load 1 card for albums and verify title", () => {
    cy.wait("@getAlbums");
    const cards = new AlbumCardPageObject(".grid");
    const firstCard = cards.findCardByIndex(0);
    firstCard.should("exist");
    firstCard
      .find("[data-testid=title]")
      .should("exist")
      .should("have.text", "Album 1");

    // Price
    // firstCard
    //   .find("[data-testid=title]")
    //   .should("exist")
    //   .should("have.text", "Album 1");

    // // Singers
    // firstCard
    //   .find("[data-testid=title]")
    //   .should("exist")
    //   .should("have.text", "Album 1");

    // // Add to cart
    // firstCard
    //   .find("[data-testid=title]")
    //   .should("exist")
    //   .should("have.text", "Album 1");
  });
});
