describe('verify the links ', () => {
    it('verify multiple domain', () => {

      cy.visit('https://www.wikipedia.org/')

      cy.contains('Commons').click()

      cy.wait(5000)

      cy.origin('https://commons.wikimedia.org/wiki/Main_Page', () =>{

        cy.url().should("eq","https://commons.wikimedia.org/wiki/Main_Page")

        cy.contains('Wikimedia Commons').should('be.visible')//
        


      })

    })
    
})