let storageCache;

describe('Authenticated User Cases:', function() {
  before(()=> {
    cy.authenticate('testUser').then((_) => {
      storageCache={...localStorage};
    }
  );
  })
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        Object.entries(storageCache).forEach(([k,v]) => {
          win.localStorage.setItem(k,""+v)
        })
      }
    })
  })
  describe('sign in', ()=> {
    it ('should display username greeting', () => {
      cy.get('.amplify-heading').contains('testUser')
    })
  })
  describe('sign in credentials carry over', ()=> {
    it ('should display username greeting', () => {
      cy.get('.amplify-heading').contains('testUser')
    })
  })
});