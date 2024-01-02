class PageSearch {
    get buttonSearch () {
        return cy.get('[data-test="search-compact"]', {force:true}).click();
    }

    buttonSearchAndType (tekst) {
        return cy.get('input[aria-label="Write and press enter"]', {force:true}).type(tekst, {delay:20});
    }

    get buttonSearchAndSubmit () {
        return cy.get('[data-test="button"]', {force:true}).click();
    }

    get assertionSearch () {
        cy.get('li:nth-child(1)[data-test="search-item"]').should("have.class", 'searchItem');
    }
}

export default new PageSearch ();