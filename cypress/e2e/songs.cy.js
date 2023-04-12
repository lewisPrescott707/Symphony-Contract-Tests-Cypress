describe('Top songs', () => {
    const url = '/songs/ed-sheeran'
    before(() => {
        // setup pact https://github.com/pactflow/pact-cypress-adapter#cyusepactwaitalias--alias
        cy.setupPact('ui-top-songs', 'api-top-songs')
        cy.intercept(`${url}*`, { fixture: 'songs.json' }).as('songs')
    })

    it('Artist', () => {
        cy.visit('/')
        cy.get('button').click()
        cy.usePactWait(['songs']) // use pact wait
        cy.contains('li', 'The A Team').should('be.visible')
    })
})
