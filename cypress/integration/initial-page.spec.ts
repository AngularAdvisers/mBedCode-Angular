describe('initial-page', () => {

    beforeEach(() => {
      cy.visit("localhost:4200/");
    })
  
    it(`has title 'mbedcode'`, () => {
      cy.contains('mbedcode');
      cy.get('h1').should('contain', 'mbedcode');
      cy.title().should('eq', 'Mbedcode');
    })
  
  })