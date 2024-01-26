class pageSubscribeContactForm {

    constructor () {
        this.choosenSubject = null;
    }

    inputIm () {
    cy.get('#Im').find('option').as('listIm');
    cy.get('@listIm').then(($chooseIm) => { 
    const randomIndex = Cypress._.random(1, $chooseIm.length - 1);
    // funkcja z biblioteki Ladosh generująca losową liczbę
    const choosenOption = $chooseIm.eq(randomIndex);
    // do zmiennej przypisany zostaje konkretny element z kolekcji chooseIm
    const choosenValue = choosenOption.attr('value');
    // do zmiennej przypisana zostaje wartość z pobranego elementu
    cy.log(`Im: ${choosenValue}`); 
    cy.get('#Im').select(choosenValue);
    cy.get('#Im').blur();
        })
    }

    inputBirthdayDay () {
        cy.get('#Day').find('option').as('listDay');
        cy.get('@listDay').then(($chooseDay) => { 
        const randomIndex = Cypress._.random(1, $chooseDay.length - 1);
        // funkcja z biblioteki Ladosh generująca losową liczbę
        const choosenOption = $chooseDay.eq(randomIndex);
        // do zmiennej przypisany zostaje konkretny element z kolekcji chooseDay
        const choosenValue = choosenOption.attr('value');
        // do zmiennej przypisana zostaje wartość z pobranego elementu
        cy.log(`Choosen day: ${choosenValue}`); 
        cy.get('#Day').select(choosenValue);
        cy.get('#Day').blur();
        })
    }

    inputBirthdayMonth () {
        cy.get('#Month').find('option').as('listMonth');
        cy.get('@listMonth').then(($chooseMonth) => { 
        const randomIndex = Cypress._.random(1, $chooseMonth.length - 1);
        // funkcja z biblioteki Ladosh generująca losową liczbę
        const choosenOption = $chooseMonth.eq(randomIndex);
        // do zmiennej przypisany zostaje konkretny element z kolekcji chooseMonth
        const choosenValue = choosenOption.attr('value');
        // do zmiennej przypisana zostaje wartość z pobranego elementu
        cy.log(`Choosen month: ${choosenValue}`); 
        cy.get('#Month').select(choosenValue);
        cy.get('#Month').blur();
        })
    }

    inputChooseCountry() {
        cy.get('#CountrySelector').find('option').as('listCountry');
        cy.get('@listCountry').then(($chooseCountry) => { 
        const randomIndex = Cypress._.random(1, $chooseCountry.length - 1);
        // funkcja z biblioteki Ladosh generująca losową liczbę
        const choosenOption = $chooseCountry.eq(randomIndex);
        // do zmiennej przypisany zostaje konkretny element z kolekcji chooseCountry
        const choosenValue = choosenOption.attr('value');
        // do zmiennej przypisana zostaje wartość z pobranego elementu
        cy.log(`Choosen country: ${choosenValue}`); 
        cy.get('#CountrySelector').select(choosenValue);
        cy.get('#CountrySelector').blur();
        // funkcja blur() używana do utraty fokusu na danym elemencie. Działa podobnie jak gdybyś kliknął w innym miejscu na stronie
        })
    }

    inputSubject () {
        cy.get('#Subject').find('option').as('listSubject');
        cy.get('@listSubject').then(($chooseSubject) => { 
        const randomIndex = Cypress._.random(1, $chooseSubject.length - 1);
        // funkcja z biblioteki Ladosh generująca losową liczbę
        const choosenOption = $chooseSubject.eq(randomIndex);
        // do zmiennej przypisany zostaje konkretny element z kolekcji chooseSubject
        this.choosenSubject = choosenOption.attr('value');
        // do zmiennej przypisana zostaje wartość z pobranego elementu
        cy.log(`Subject: ${this.choosenSubject}`); 
        cy.get('#Subject').select(this.choosenSubject);
        cy.get('#Subject').blur();
        })
    }

    inputFirstName (firstName) {
        return cy.get('#FirstName').type(firstName);
    }

    inputLastName (lastName) {
        return cy.get('#LastName').type(lastName);
    }

    inputEmailAdress (eMail) {
        return cy.get('#EmailAddress').type(eMail);
    }

    inputConfirmEmailAdress (email) {
        cy.get('#EmailAddress').type(email)
        cy.get('#ConfirmEmailAddress').type(email);
        cy.get('#EmailAddress').should('have.value', email);
        cy.get('#ConfirmEmailAddress').should('have.value', email);
    }

    inputPhone (phoneNumber) {
        return cy.get('#Phone').type(phoneNumber);
    }

    checkboxNewsletter () {
        return cy.get('#Newsletter').check();
    }

    checkboxPrivacePolicy () {
        return cy.get('#Privacy').check();
    }

    buttonSubmit () {
        return cy.get('.ctrl-submit').click();
    } 

    subjectBecomeCustomer (name,adress, phone, email, perSalon, text) {
        cy.then (() => {
            if (this.choosenSubject === 'Becomeacustomer') {
           cy.get('#SalonNameReq').as('salonName').type(name);
           cy.get('#SalonAddressReq').as('salonAdress').type(adress);
           cy.get('#SalonPhoneReq').as('salonPhone').type(phone);
           cy.get('#SalonManagerEmailReq').as('salonEmail').type(email);
           cy.get('#StylistNumbPerSalonReq').as('numberPerSalon').type(perSalon);
           cy.get('#Message').as('message').type(text);
        } else {
            cy.get('#Message').as('message').type(text);
        }
    })
}
    assertionError () {
        cy.get('[role="alert"]').as('error');
        cy.log('verifies the error field is present');
        cy.get('@error').should('exist');
        cy.log('verifies the error field displays a message: This field is required');
        cy.get('@error').should('contain', 'This field is required');
        
    }

    // checkboxReCaptcha () {
    // return cy.iframe('[title="reCAPTCHA"]').find('[tabindex="0"]').click();
    // }

}

export default new pageSubscribeContactForm ();