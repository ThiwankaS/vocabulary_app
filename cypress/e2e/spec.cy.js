describe('Vocabulary App e2e testing', () => {
  it('- front page can be opened', () => {
    cy.visit('http://localhost:3001');
    cy.contains('Finnish - English Word Game');
  })
})