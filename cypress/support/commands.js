// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('handleUncaughtException', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Check if the error message contains the expected string
      if (err.message.includes('Things went bad')) {
        // Ignore the expected error and let the test continue
        return false;
      }
      // If it's not the expected error, Cypress will fail the test
      return true;
    });
  });

  Cypress.Commands.add('handleUncaughtExceptionGtag', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Sprawdź, czy błąd jest związany z brakiem definicji gtag
    if (err.message.includes('gtag is not defined')) {
      // Zignoruj błąd i pozwól na kontynuację testu
      return false;
    }
    // Jeśli to inny błąd, zwróć true, aby test został zakończony niepowodzeniem
    return true;
  });
});

Cypress.Commands.add('handleUncaughtExceptionUnexpectedTocken', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Unexpected token')) {
    // Ignoruj błąd związanego z nieoczekiwanym tokenem
    return false;
    }
   return true;
  });
});
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })