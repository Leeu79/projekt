import pageSearch from "../../support/pageObject/pageSearch";
import pageCountry from "../../support/pageObject/pageCountry";

/// <reference types="cypress" />
describe ('CountrySelector and label Search', () => {
  beforeEach(() => {
      cy.visit('https://www.wella.com/professional/en-EN/home')
      cy.get('[id="onetrust-accept-btn-handler"]').click()
  })
  it ('Choose a country', () => {
            pageCountry.locationsHref();
          })
  it ('Check search input', () => {
            pageSearch.buttonSearch;
            pageSearch.buttonSearchAndType('mask');
            pageSearch.buttonSearchAndSubmit;
            pageSearch.assertionSearch;
            })
})
     
    
