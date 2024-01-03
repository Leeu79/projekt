class PageCountry {
  
    get countryListItem () {
        return  cy.get('[class="countrySelector__list countrySelector__list"] [class="countrySelector__list__continent__list"] [class="countrySelector__list__continent__list--item"] > a');
    }

    locationsHref () {
        this.countryListItem.then(($locations) => {
            const countrySelector = $locations.toArray().map(location => location.href);
            countrySelector.forEach((href) => {
                cy.visit(href);
                })
              })
            }
        }


export default new PageCountry ();