class AlbumCardPageObject {
  listing = null;

  constructor(listing) {
    this.listing = listing;
  }

  findCardByIndex(index) {
    return cy.get(`${this.listing} app-album-card`).eq(index);
  }

  findTitle(index){
    return this.findCardByIndex(index).find('[data-testid="title"]')
  }
}

export default AlbumCardPageObject;