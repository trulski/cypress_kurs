describe('Legge til eit par ski i handlesekken', () => {
    it('Besøke VPG.no og gå inn på ski uten binding', () => {
      cy.visit('https://www.vpg.no/')

      cy.findByRole('link', {name: 'Ski'}).trigger('mouseover')
      cy.findByRole('link', {name: 'Ski uten binding'}).click()

      cy.findAllByRole('link').contains('4FRNT Renegade')
      .scrollIntoView()
      .click()

      cy.findByRole('button', {name: /Kjøp/i}).click()
    })
  })