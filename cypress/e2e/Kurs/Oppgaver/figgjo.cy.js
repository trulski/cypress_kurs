describe('Sjå på fat', () => {
    it('figgjo.no', () => {
      cy.visit('https://figgjofabrikkutsalg.no/')
  
      cy.findByRole('link', {name: 'Produkter'}).trigger('mouseover')
      cy.findByRole('link', {name: 'Nyhet! Figgjo Ela'}).click()
      cy.findByRole('link', 
      {name: 'Figgjo Ela Tallerken - 27 cm - Ela dekor - 5504hh-elab'}).click()
      cy.findByRole('button', {name: /Legg til handlekurv/i}).click()
    })
  })
  