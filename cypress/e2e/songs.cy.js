describe('Top songs', () => {
    const url = '/songs/ed-sheeran'
    before(() => {
        // setup pact
        cy.intercept(`${url}*`, { fixture: 'songs.json' }).as('songs')
    })

    it('Artist', () => {
        cy.visit('/')
        cy.get('button').click()
        cy.wait('@songs') // use pact wait
        cy.contains('li', 'The A Team').should('be.visible')
    })
})
