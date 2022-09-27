describe('My Second Test', () => {
  it('finds the content "type" using the role "link"', () => {
    cy.visit('/')

    cy.findByRole('link', {name: 'type'}).click()

    cy.url().should('include', '/commands/actions')

    cy.findByRole('textbox', {name: 'Email address'})
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})

