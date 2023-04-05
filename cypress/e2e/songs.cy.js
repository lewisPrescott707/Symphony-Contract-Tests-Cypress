describe('Top songs', () => {
    const url = '/songs/ed-sheeran'
    before(() => {
        // setup pact
        // intercept songs (ed-sheeran)
    })

    it('Artist', () => {
        cy.visit(url)
        cy.get('button').click()
        // use pact wait
        cy.contains('li', 'Shape of you').should('be.visible')
    })
})
