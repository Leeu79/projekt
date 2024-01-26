class PageNavigationSearch {
    get buttonSearch () {
        return cy.get('[data-test="search-compact"]', {force:true}).click();
    }

    type (searchPhrase) {
        return cy.get('[data-test="input"]', {force:true}).type(searchPhrase, {delay:20});
    }

    enterType () {
        return cy.get('[data-test="input"]').type('conditioner {enter}');
    }

    get buttonSubmit () {
        return cy.get('[data-test="button"]', {force:true}).click();
    }

    get assertionSearch () {
        cy.get('li:nth-child(1)[data-test="search-item"]').should("have.class", 'searchItem');
    }
}

export default new PageNavigationSearch ();