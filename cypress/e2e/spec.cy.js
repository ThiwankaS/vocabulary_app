describe('Vocabulary App e2e testing', () => {

  it('- should load the home page and verify elements', () => {
    cy.visit('http://localhost:3001');
    cy.get('h1').should('contain.text', 'Finnish - English Word Game');
    cy.get('.MuiContainer-root').should('be.visible');
    cy.get('.MuiButton-contained').should('have.length', 2);
    
  });

  it('- should reset the game and reload questions', () => {
    cy.visit('http://localhost:3001');
    cy.get('.MuiGrid-container').find('.MuiButton-contained').contains('New Game').click(); 
    cy.get('.MuiGrid-container').find('.MuiButton-outlined').should('have.length', 20);
  });

});
