import pageSubscribeContactForm from "../../support/pageObject/pageSubscribeContactForm";

pageSubscribeContactForm

/// <reference types="cypress" />
describe('Subscribe forms in Wella Pro', () => {
  beforeEach (() => {
    cy.visit('https://www.wella.com/professional/en-EN/subscribe');
    cy.acceptOneTrust();
  })
  it.only ('should verify subscribe forms with correct phrase', () => {
    pageSubscribeContactForm.inputIm();
    // insert firstName e.g. 'Diego'
    pageSubscribeContactForm.inputFirstName('Diego');
    // insert lastName e.g. 'Maradona'
    pageSubscribeContactForm.inputLastName('Maradona');
    pageSubscribeContactForm.inputBirthdayDay();
    pageSubscribeContactForm.inputBirthdayMonth();
    pageSubscribeContactForm.inputChooseCountry();
    // insert emailAdress e.g. 'boski@gmail.com'
    pageSubscribeContactForm.inputEmailAdress('boski@gmail.com')
    pageSubscribeContactForm.checkboxNewsletter();
    pageSubscribeContactForm.checkboxPrivacePolicy();
    // pageSubscribeContactForm.checkboxReCaptcha();
    pageSubscribeContactForm.buttonSubmit();
    })

  it ('should verify subscribe forms without entering data', () => {
    pageSubscribeContactForm.buttonSubmit();
    // verifies the error field is present and displays a message 'This field is required'
    pageSubscribeContactForm.assertionError();
  })
})