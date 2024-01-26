import pageWebsiteSearch from "../../support/pageObject/pageWebsiteSearch";

/// <reference types="cypress" />
describe ('Search Input in Wella Professional', () => {
  beforeEach (() => {
    cy.visit('https://www.wella.com/professional/en-EN/search')
    cy.acceptOneTrust();
  })
  it.only ('website -> should verify search functionality with correct phrase', () => {
    pageWebsiteSearch.buttonSearch;
    // insert correct phrase e.g. 'mask'
    pageWebsiteSearch.type('mask');
    pageWebsiteSearch.buttonSubmit;
    pageWebsiteSearch.assertionSearch;
  })
  it ('website -> should verify search functionality after empty search', () => {
    pageWebsiteSearch.buttonSubmit;
    pageWebsiteSearch.assertionEmptySearch;
  })
  it ('website -> should verify search functionality with correct phrase after click enter', () => {
    pageWebsiteSearch.buttonSearch;
    pageWebsiteSearch.enterType();
    pageWebsiteSearch.assertionSearch;
  })
})