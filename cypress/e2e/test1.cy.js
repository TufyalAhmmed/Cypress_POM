/// <reference types="cypress"/>

it('Google Search', () =>{
    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Automation Step by Step{Enter}')
    // cy.contains('Google Search').click()
    // cy.get('.MUFPAc > :nth-child(2) > a, {timeout:500000}').click()
    cy.wait(30000)
    cy.get('[href="https://automationstepbystep.com/"] > .LC20lb').click()
    
    
    
})