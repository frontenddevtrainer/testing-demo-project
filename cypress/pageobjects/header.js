class HeaderPageObject {
  findTitle() {
    return cy.get("app-header .text-2xl");
  }

  findCartIcon() {
    return cy.get("app-header span.material-icons").contains("shopping_cart");
  }

  findProfileDropDown(){
    return cy.get('[data-testid="profile-dropdown"]')
  }

  findProfileDropDownButton(){
    return cy.get('[data-testid="profile-dropdown"] button')
  }

  findMenuArrow(){
    return cy.get('[data-testid="menu-arrow"]')
  }

  findMenuLinks(){
    return cy.get('[role="menu"] a')
  }

}

export default new HeaderPageObject();