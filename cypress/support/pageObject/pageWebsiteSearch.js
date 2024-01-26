class PageWebsiteSearch {
    get buttonSearch () {
        return cy.get('[data-test="search-input"]', {force:true}).click();
    }

    type (phrase) {
        return this.buttonSearch.type(phrase, {delay:20});
    }

    enterType () {
        return this.buttonSearch.type('conditioner {enter}');
    }

    get buttonSubmit () {
        return cy.get('[type="submit"]', {force:true}).click();
    }

    get assertionSearch () {
        cy.get('li:nth-child(1)[data-test="search-item"]').as('searchResult')
        cy.get('@searchResult').should("have.class", 'searchItem');
    }

    get assertionEmptySearch () {
        cy.contains("Please enter what you are looking for").should("be.visible");
    }
}

export default new PageWebsiteSearch ();