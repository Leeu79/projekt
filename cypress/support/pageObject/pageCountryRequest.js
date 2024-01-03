class PageCountryRequest {
  
    get countryListItem () {
        return  cy.get('[class="countrySelector__list countrySelector__list"] [class="countrySelector__list__continent__list"] [class="countrySelector__list__continent__list--item"] > a');
    }

    locationsHrefRequest () {
        this.countryListItem.then(($locations) => {
            const countrySelector = $locations.toArray().map(location => location.href);
            countrySelector.forEach((href) => {
              cy.request({
                url: href,
                failOnStatusCode: false,
              }).then((response) => {
                if (response.status === 200) {
                  cy.log(`Strona dostępna na podstawie atrybutu href ${href}`);
                } else {
                  cy.log('error');
                }
              })
            })
          })
        }
      }
  

export default new PageCountryRequest ();