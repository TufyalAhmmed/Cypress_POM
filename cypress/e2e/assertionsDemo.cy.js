
it('Assertions Demo', () => {

    cy.visit('https://example.cypress.io')
    cy.contains('Querying').click({force:true}) 

    cy.get('#query-btn').should('contain','Button')
                                                .and('have.class','query-btn btn btn-primary')  
                                                .and('be.visible')  
                                                .and('be.enabled')

                                            expect(true).to.be.true

                                            assert.equal(4, '4', 'Not Equal' )

  })