/// <reference types="cypress" />
describe ('CountrySelector and label Search', () => {
  beforeEach(() => {
      cy.visit('https://www.wella.com/professional/en-EN/home')
      cy.get('[id="onetrust-accept-btn-handler"]').click()
  })
  it ('Choose a country', () => {
      cy.get('div[class="countrySelector"]').click({force:true}).then(countrySelector => {
          cy.wrap(countrySelector).find('[class="countrySelector__list countrySelector__list"] [class="countrySelector__list__continent__list"] [class="countrySelector__list__continent__list--item"] > a')
          // .each(countrySelector,index => {
          // if (index >= 0 && index <= 30) {
          // cy.wrap(countrySelector).click({force:true}).then(search => {  
          // w 11 wierszu trzeba zamienic click na instrukcje wrunkowa
          // .each(country => {
          // cy.wrap(countrySelector).click({force:true})
          // .then(search => { 
            cy.get('[data-test="search-compact"]', {force:true}).click()
            cy.get('input[aria-label="Write and press enter"]', {force:true}).type("asadlkoijhgff", {delay:20}).then(submit => {
            cy.get('[data-test="button"]', {force:true}).click()
            .then(check => {
            cy.get('li:nth-child(1)[data-test="search-item"]').should("have.class", 'searchItem')
                 })
                })
               })
            //   } else {
            //   cy.visit('https://www.wella.com/professional/en-EN/home')
            // }
       })
      })
  //   })
  // })
