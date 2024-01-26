import pageSubscribeContactForm from "../../support/pageObject/pageSubscribeContactForm";

/// <reference types="cypress" />
describe('ContactUs forms in Wella Pro', () => {
    beforeEach (() => {
      cy.visit('https://www.wella.com/professional/en-EN/contact-us');
      cy.acceptOneTrust();
    })

  it('should verify ContactUs forms with correct phrase', () => {
    pageSubscribeContactForm.inputChooseCountry(); 
    pageSubscribeContactForm.inputIm();
    // insert firstName e.g. 'Kazimierz'
    pageSubscribeContactForm.inputFirstName('Kazimierz');
    // insert lastName e.g. 'Deyna'
    pageSubscribeContactForm.inputLastName('Deyna');
    // insert email adress e.g. 'kazio@gmail.com'
    pageSubscribeContactForm.inputConfirmEmailAdress('kazio@gmail.com');
    // insert firstName e.g. '501501501'
    pageSubscribeContactForm.inputPhone('501501501')
    pageSubscribeContactForm.inputSubject();
    // if choosenSubject === "Become a customer insert 'salonName, salonAdress, salonPhone, salonEmail, numberPerSalon,message' 
    pageSubscribeContactForm.subjectBecomeCustomer('FootballStore', 'L3', '226191600', 'store@gmail.com', '22100100', 'I want to check how your store works?');
    pageSubscribeContactForm.checkboxPrivacePolicy();
    // pageSubscribeContactForm.checkboxReCaptcha();
    pageSubscribeContactForm.buttonSubmit();
    })
  

  it ('should verify ContactUs forms without entering data', () => {
    pageSubscribeContactForm.buttonSubmit();
    // verifies the error field is present and displays a message 'This field is required'
    pageSubscribeContactForm.assertionError();
    })
})
