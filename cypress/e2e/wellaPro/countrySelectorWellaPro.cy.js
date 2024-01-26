import pageSearch from "../../support/pageObject/pageNavigationSearch";
import pageCountryRequest from "../../support/pageObject/pageCountryRequest";
import pageCountry from "../../support/pageObject/pageCountry";

/// <reference types="cypress" />
describe ('Country Selector Functionality in Wella Professional', () => {
  beforeEach(() => {
      cy.visit('https://www.wella.com/professional/en-EN/home')
      cy.acceptOneTrust();
      cy.handleUncaughtException();
      cy.handleUncaughtExceptionGtag();
      cy.handleUncaughtExceptionUnexpectedTocken();
          })
  it.only('should verify that all locations display properly', () => {
            pageCountry.locationsHref();
          })
  it ('should verify that all locations have status request equal 200', () => {
            pageCountryRequest.locationsHrefRequest();
          })
        })