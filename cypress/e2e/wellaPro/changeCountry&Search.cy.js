import pageSearch from "../../support/pageObject/pageSearch";
import pageCountryRequest from "../../support/pageObject/pageCountryRequest";
import pageCountry from "../../support/pageObject/pageCountry";

/// <reference types="cypress" />
describe ('CountrySelector and label Search', () => {
  beforeEach(() => {
      cy.visit('https://www.wella.com/professional/en-EN/home')
      cy.get('[id="onetrust-accept-btn-handler"]').click()
      cy.handleUncaughtException();
      cy.handleUncaughtExceptionGtag();
      cy.handleUncaughtExceptionUnexpectedTocken();
          })
  it.only ('Choose country', () => {
            pageCountry.locationsHref();
          })
  it ('Choose a country by Request', () => {
            pageCountryRequest.locationsHrefRequest();
          })
  it ('Check search input', () => {
            pageSearch.buttonSearch;
            pageSearch.buttonSearchAndType('mask');
            pageSearch.buttonSearchAndSubmit;
            pageSearch.assertionSearch;
          })
        })