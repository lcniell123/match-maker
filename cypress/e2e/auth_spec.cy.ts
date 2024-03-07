describe('Authenticator:', function() {    
    describe('sign in', ()=> {
      it ('should display username greeting', () => {
        cy.authenticate('testUser');
        cy.visit('/');
        cy.get('.amplify-heading').contains('testUser')
      })
    })
  });