import pageNavigationSearch from "../../support/pageObject/pageNavigationSearch";
import pageWebsiteSearch from "../../support/pageObject/pageWebsiteSearch";

/// <reference types="cypress" />
describe ('Search Input in Wella Professional', () => {
  beforeEach (() => {
    cy.visit('https://www.wella.com/professional/en-EN/home')
    cy.acceptOneTrust();
  })
  it ('navigation -> should verify search functionality with correct phrase', () => {
    pageNavigationSearch.buttonSearch;
    // insert correct phrase e.g. 'mask'
    pageNavigationSearch.type('mask');
    pageNavigationSearch.buttonSubmit;
    pageNavigationSearch.assertionSearch;
  })
  it.only ('navigation -> should verify search functionality with correct phrase after click enter', () => {
    pageNavigationSearch.buttonSearch;
    pageNavigationSearch.enterType();
    pageNavigationSearch.assertionSearch;
  })
})